import React from "react";
import { List, InputItem, Button, Toast, Flex, WhiteSpace } from 'antd-mobile';
import { createForm, formShape } from 'rc-form';
import './Login.scss';

const { Item } = List;

class LogingForm extends React.Component {
    readonly props: {
        form: formShape,
        onLogin: Function
    }
    readonly state: {
        phone: string,
        invalidPhone: boolean,
        captcha: string,
        invalidCaptcha: boolean,
    }

    constructor(props: any) {
        super(props);
        this.state = {
            phone: '',
            invalidPhone: false,
            captcha: '',
            invalidCaptcha: false,
        };
    }

    private submitForm(): void {
        if (this.state.invalidPhone || this.state.invalidCaptcha || !this.state.phone || !this.state.captcha) return;
        this.props.onLogin();
    }

    private phoneChangeHandler(phone: string): void {
        if (phone.replace(/\s/g, '').length < 11) {
            this.setState({ invalidPhone: true });
        } else {
            this.setState({ invalidPhone: false });
        }
        this.setState({ phone });
    }

    private errorClickHandler(): void {
        if (this.state.invalidPhone) {
            Toast.info('Please enter 11 digits');
        }
        if (this.state.invalidCaptcha) {
            Toast.info('Please enter correct captcha');
        }
    }

    private captchaChangeHandler(captcha: string): void {
        if (captcha.replace(/\s/g, '').length < 4) {
            this.setState({ invalidCaptcha: true });
        } else {
            this.setState({ invalidCaptcha: false });
        }
        this.setState({ captcha });
    }

    private validateAccount(rule, value, callback): void {
        if (value && value.length > 4) {
            callback();
        } else {
            callback(new Error('At least four characters for account'));
        }
    }

    private captchaClick(): void {
        throw new Error('I crashed!');
    }

    public render(): any {
        const { getFieldProps, getFieldError } = this.props.form;
        const invalidPhone = this.state.invalidPhone || !this.state.phone;
        const invalidCaptcha = this.state.invalidCaptcha || !this.state.captcha;
        const invalid = invalidCaptcha || invalidPhone;
        return (
            <Flex className="Login" direction="row" justify="center" align="center">
                <Flex.Item>
                    <List
                        renderHeader={() => '电话号码登陆'}
                        renderFooter={() => getFieldError('account') && getFieldError('account').join(',')}
                    >
                        <Item>
                            <InputItem
                                clear
                                type="phone"
                                placeholder="请输入手机号码"
                                value={this.state.phone}
                                error={this.state.invalidPhone}
                                onErrorClick={this.errorClickHandler.bind(this)}
                                onChange={this.phoneChangeHandler.bind(this)}
                            >
                                电话
                            </InputItem>
                        </Item>
                        {/* <Item extra={<Button className="captcha-btn" type="ghost" inline>验证码</Button>}>
                            <InputItem
                                clear
                                type="digit"
                                placeholder="请输入验证码"
                                value={this.state.captcha}
                                error={!!getFieldError('account')}
                                onErrorClick={this.errorClickHandler.bind(this)}
                                onChange={this.captchaChangeHandler.bind(this)}
                            >
                                验证码
                            </InputItem>
                        </Item> */}
                        <Item extra={<Button className="captcha-btn" type="ghost" onClick={this.captchaClick.bind(this)} inline>验证码</Button>}>
                            <InputItem
                                {...getFieldProps('account', {
                                    rules: [
                                        { required: true, message: 'Please input account' },
                                        { validator: this.validateAccount },
                                    ],
                                })}
                                clear
                                type="digit"
                                placeholder="请输入验证码"
                                // value={this.state.captcha}
                                error={!!getFieldError('account')}
                                onErrorClick={() => {
                                    alert(getFieldError('account').join('、'));
                                }}
                                // onChange={this.captchaChangeHandler.bind(this)}
                            >
                                验证码
                        </InputItem>
                        </Item>
                        <WhiteSpace size="lg" />
                        <Item>
                            <Button type="primary" disabled={invalid} onClick={this.submitForm.bind(this)}>登陆</Button>
                        </Item>
                    </List>
                </Flex.Item>
            </Flex>
        );
    }
}

export const Loging = createForm()(LogingForm);