import React from 'react';
import { createForm, formShape } from 'rc-form';
import { List, InputItem, Button, Toast, Flex, WhiteSpace } from 'antd-mobile';
import { always } from 'ramda';
import { interval } from 'rxjs';
import { take, map as rxjsMap } from 'rxjs/operators';
import './sign-in.scss';

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

const SignInForm = (props: { form: formShape, onLogin: Function }) => {
    const { getFieldProps, getFieldError } = props.form;
    const [vcodeState, setvcodeState] = useState(false);
    const [timer, setTimer] = useState(59);
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
    const { [Options.Phone]: phone, [Options.Captcha]: vcode } = props.form.getFieldsValue();
    const hasEmpty = !phone || !vcode;
    const hasEmptyOrInvalid = hasEmpty || errorTip;
    const getVcode = () => {
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
        console.log(phone, vcode);
        props.onLogin(true);
    };

    useEffect(() => {
        !vcodeState && setTimer(59);
    }, [vcodeState]);

    return (
        <Flex className="Login" direction="row" justify="center" align="center">
            <Flex.Item>
                <List renderHeader={always('电话号码登陆')} /* renderFooter={errorTip} */>
                    <ListItem >
                        <InputItem {...phoneFiled}
                            clear type="phone" placeholder="请输入手机号"
                            error={!!getFieldError(Options.Phone)}
                            onErrorClick={() => Toast.info('请输入11位手机号')}
                        >手机号</InputItem>
                    </ListItem>
                    <ListItem extra={
                        <Button className="captcha-btn" type="ghost" size="small" inline
                            disabled={vcodeState}
                            onClick={getVcode}>
                            {!vcodeState ? '获取验证码' : `${timer}s后获取`}
                        </Button>
                    }>
                        <InputItem {...vcodeFiled}
                            clear type="digit" placeholder="请输入验证码"
                            error={!!getFieldError(Options.Captcha)}
                            onErrorClick={() => Toast.info('请输入正确的验证码')}
                        >验证码</InputItem>
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

export const SignIn = createForm()(SignInForm);
