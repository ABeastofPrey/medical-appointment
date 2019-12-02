import React from 'react';
import { TabBar, Icon } from 'antd-mobile';
import { Center } from '../center/Center';
import { Appointment } from '../appointment/Appointment';
import { Information } from '../information/Information';
import { Header } from '../header/Header';
import './Footer.scss';

export class Footer extends React.Component {
    readonly state: any;
    readonly props: any;
    constructor(props: any) {
        super(props);
        this.state = {
            selectedTab: 'main',
        };
    }

    private renderCenter(): any {
        return (
            <div>
                <Header />
                <Center>
                    {this.state.selectedTab === 'main' ? <Appointment /> : <Information />}
                </Center>
            </div>
        );
    }

    render() {
        return (
            <div className="App-footer">
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                    <TabBar.Item
                        icon={(<Icon type="check"></Icon>)}
                        selectedIcon={(<Icon type="check-circle"></Icon>)}
                        title="Appointment"
                        key="main"
                        // dot
                        selected={this.state.selectedTab === 'main'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'main',
                            });
                        }}
                    >
                        {this.renderCenter()}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={(<Icon type="cross-circle-o"></Icon>)}
                        selectedIcon={(<Icon type="cross-circle"></Icon>)}
                        title="Info"
                        key="info"
                        selected={this.state.selectedTab === 'info'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'info',
                            });
                        }}
                    >
                        {this.renderCenter()}
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}