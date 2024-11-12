import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Characters from '../Characters';

const TabsSection = () => (
    <div className="Tabs-section">
        <Tabs>
            <TabList>
                <Tab>Characters</Tab>
                <Tab>Comics</Tab>
                <Tab>Stories</Tab>
                <Tab>Favorites</Tab>
            </TabList>
            <TabPanel>
                <Characters />
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 3</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 4</h2>
            </TabPanel>
        </Tabs>
    </div>
);

export default TabsSection;
