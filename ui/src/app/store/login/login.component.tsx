import React from 'react';
import { createForm, formShape } from 'rc-form';
import { always } from 'ramda';
import { interval } from 'rxjs';
import { take, map as rxjsMap } from 'rxjs/operators';
import { useDispatch, useSelector } from 'react-redux';
import { List, InputItem, Button, Toast, Flex, WhiteSpace } from 'antd-mobile';
import { getVcode, login } from './login.actions';
import { selectVcode, selectPhone, selectLoginState } from './login.selectors';
import { Map } from 'immutable';
import { LoginState } from './login.types';
import './login.component.scss';

enum Options {
    Phone = 'phoneNumber',
    Captcha = 'validationCode',
}
const { useState, useEffect } = React;
const { Item: ListItem } = List;

const phoneValidator = (rule, value, callback) => {
    if (value.replace(/\s/g, '').length === 11) {
        callback();
    } else {
        callback(new Error('Please enter 11 digits'));
    }
};

const vcodeValidator = (rule, value: string, callback: Function) => {
    const length = value.replace(/\s/g, '').length;
    if (length === 4) {
        callback();
    } else {
        callback(new Error('请输入正确验证码'));
    }
};

const LoginComponent = (props: { form: formShape, onLogin: Function }) => {
    const { form, onLogin } = props;
    const { getFieldProps, getFieldError } = form;
    const { [Options.Phone]: phone, [Options.Captcha]: vcode } = form.getFieldsValue();
    const phoneFiled = getFieldProps(Options.Phone, {
        rules: [
            { required: true, message: '请输入手机号' },
            { validator: phoneValidator },
        ],
    });
    const vcodeFiled = getFieldProps(Options.Captcha, {
        rules: [
            { required: true, message: '请输入验证码' },
            { validator: vcodeValidator }
        ],
    });
    const errorTip = getFieldError(Options.Phone) || getFieldError(Options.Captcha);
    const hasEmpty = !phone || !vcode;
    const hasEmptyOrInvalid = hasEmpty || errorTip;
    const [vcodeState, setvcodeState] = useState(false);
    const [timer, setTimer] = useState(59);
    const storePhone = useSelector(selectPhone);
    const storeVcode = useSelector(selectVcode);
    const storeLogin = useSelector(selectLoginState);
    const dispatch = useDispatch();

    const fetchVcode = () => {
        dispatch(getVcode(phone));
        setvcodeState(true);
        interval(1000).pipe(
            rxjsMap(i => timer - i),
            take(3)
        ).subscribe(res => {
            setTimer(res);
            (res === 57) && setvcodeState(false);
        });
    };

    const submitForm = () => {
        const isTheSamePhone = phone === storePhone;
        const isCorrectVcode = parseInt(vcode) === storeVcode;
        if (!isTheSamePhone || !isCorrectVcode) {
            Toast.info('验证码不正确');
        } else {
            dispatch(login(Map({ phone: phone, vcode: vcode, isLogin: false }) as LoginState));
        }
    };

    useEffect(() => {
        !vcodeState && setTimer(59);
    }, [vcodeState]);

    useEffect(() => {
        storeLogin && onLogin(storeLogin);
    }, [storeLogin, onLogin]);

    return (
        <Flex className="Login" direction="row" justify="center" align="center">
            <Flex.Item>
                <List renderHeader={always('电话号码登陆')} /* renderFooter={errorTip} */>
                    <ListItem >
                        <InputItem {...phoneFiled}
                            clear type="phone" placeholder="请输入手机号"
                            error={!!getFieldError(Options.Phone)}
                            onErrorClick={() => Toast.info('请输入11位手机号')}
                        >手机号
                        </InputItem>
                    </ListItem>
                    <ListItem extra={
                        <Button type="ghost" size="small" inline disabled={vcodeState || !phone || getFieldError(Options.Phone)} onClick={fetchVcode}>
                            {!vcodeState ? '获取验证码' : `${timer}s后获取`}
                        </Button>}
                    >
                        <InputItem {...vcodeFiled} clear type="number"
                            placeholder="请输入验证码" maxLength={4}
                            error={!!getFieldError(Options.Captcha)}
                            onErrorClick={() => Toast.info('请输入正确的验证码')}
                        >验证码
                        </InputItem>
                    </ListItem>
                    <WhiteSpace size="lg" />
                    <ListItem >
                        <Button type="primary" disabled={hasEmptyOrInvalid} onClick={submitForm}>登陆</Button>
                    </ListItem>
                </List>
            </Flex.Item>
        </Flex>
    );
};

export default createForm()(LoginComponent) as any;
