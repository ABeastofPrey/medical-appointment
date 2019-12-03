import React from "react";
import { List, InputItem, Button, Toast, Tag } from 'antd-mobile';
import { createForm, formShape } from 'rc-form';
import './Login.scss';

const { Item } = List;

class LogingForm extends React.Component {
    readonly props: { form: formShape };
    readonly state: {
        phone: string,
        validPhone: boolean,
        captcha: string,
        validCaptcha: boolean,
    };

    constructor(props: any) {
        super(props);
        this.state = {
            phone: null,
            validPhone: false,
            captcha: null,
            validCaptcha: false,
        };
    }

    private submitForm(): void {
        if (this.state.validPhone || this.state.validCaptcha || !this.state.phone || !this.state.captcha) return;
        console.log(this.state.phone);
        console.log(this.state.captcha);
    }

    private phoneChangeHandler(phone: string): void {
        if (phone.replace(/\s/g, '').length < 11) {
            this.setState({ validPhone: true });
        } else {
            this.setState({ validPhone: false });
        }
        this.setState({ phone });
    }

    private errorClickHandler(): void {
        if (this.state.validPhone) {
            Toast.info('Please enter 11 digits');
        }
        if (this.state.validCaptcha) {
            Toast.info('Please enter correct captcha');
        }
    }

    private captchaChangeHandler(captcha: string): void {
        if (captcha.replace(/\s/g, '').length <= 4) {
            this.setState({ validCaptcha: true });
            this.setState({ captcha });
        } else {
            this.setState({ validCaptcha: false });
        }
    }

    public render(): any {
        return (
            <form style={{height: "100%"}}>
                <List
                    renderHeader={() => 'Form Validation'}
                // renderFooter={() => "getFieldError('account') && getFieldError('account').join(',')"}
                >
                    <InputItem
                        clear
                        type="phone"
                        placeholder="input your phone"
                        value={this.state.phone}
                        error={this.state.validPhone}
                        onErrorClick={this.errorClickHandler.bind(this)}
                        onChange={this.phoneChangeHandler.bind(this)}
                    >
                        Phone
                    </InputItem>
                    <InputItem
                        clear
                        type="digit"
                        placeholder="input validation code"
                        value={this.state.captcha}
                        error={this.state.validCaptcha}
                        onErrorClick={this.errorClickHandler.bind(this)}
                        onChange={this.captchaChangeHandler.bind(this)}
                        extra={<Button className="extra-btn" type="primary" size="small" inline>retry</Button>}
                    >
                        Captcha
                    </InputItem>
                    <Item>
                        <Button type="primary" onClick={this.submitForm.bind(this)}>Login</Button>
                    </Item>
                </List>
            </form>
        );
    }
}

export const Loging = createForm()(LogingForm);