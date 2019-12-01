import React from 'react';
import './Footer.scss';
import { TabBar, Icon } from 'antd-mobile';

export class Footer extends React.Component {
    readonly state: any;
    readonly props: any;
    constructor(props: any) {
        super(props);
        this.state = {
            selectedTab: 'appointment',
        };
    }
    render() {
        return (
            <div>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                    <TabBar.Item
                        icon={(<Icon type="check"></Icon>)}
                        selectedIcon={(<Icon type="check-circle"></Icon>)}
                        title="Appointment"
                        key="appointment"
                        // dot
                        selected={this.state.selectedTab === 'appointment'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'appointment',
                            });
                        }}
                    ><span>Appointment</span></TabBar.Item>
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
                        <span>Personal center</span>
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}