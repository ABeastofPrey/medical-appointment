import React from 'react';
import { createForm, formShape } from 'rc-form';
import { List, InputItem, Button, Toast, Flex, WhiteSpace } from 'antd-mobile';
import { always } from 'ramda';
import './Login.scss';

const { useState, useEffect } = React;
const { Item: ListItem } = List;

enum Options {
    Phone = 'phoneNumber',
    Captcha = 'validationCode',
}

const validatePhone = (rule, value, callback) => {
    if (value.replace(/\s/g, '').length < 11) {
        callback();
    } else {
        callback(new Error('Please enter 11 digits'));
    }
};

const SignInForm = (props: { form: formShape, onLogin: Function }) => {
    const { getFieldProps, getFieldError } = props.form;
    const phoneFiled = getFieldProps(Options.Phone, {
        rules: [
            { required: true, message: 'Please input validation code' },
            { validator: validatePhone },
        ],
    });
    const errorTip = () => getFieldError(Options.Phone);
    return (
        <Flex className="Login" direction="row" justify="center" align="center">
            <Flex.Item>
                <List renderHeader={always('电话号码登陆')} renderFooter={errorTip}>
                    <ListItem>
                        <InputItem {...phoneFiled}
                            clear type="phone"
                            placeholder="请输入手机号码"
                            error={!!getFieldError(Options.Phone)}
                            onErrorClick={() => Toast.info('Please enter 11 digits')}
                        >
                            验证码
                        </InputItem>
                    </ListItem>
                </List>
            </Flex.Item>
        </Flex>
    );
};

export const SignIn = createForm()(SignInForm);
