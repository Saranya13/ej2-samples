/**
 * ListView Group Template Sample
 */
import { ListView } from '@syncfusion/ej2-lists';

this.default = () => {

    //Define an array of JSON data
    let dataSource: any = [
        { Name: 'WI-FI', content: 'Disabled', id: '1', class: 'wifi', category: 'Wireless & networks', order: 0 },
        { Name: 'Bluetooth', content: 'Disabled', id: '2', class: 'bluetooth', category: 'Wireless & networks', order: 0 },
        { Name: 'SIM cards', id: '3', class: 'sim', category: 'Wireless & networks', order: 0 },
        { Name: 'Display', content: 'Adaptive brightness is OFF', id: '4', class: 'display', category: 'Device', order: 1 },
        { Name: 'Sound', content: 'Ringer volume at 50%', id: '5', class: 'sound', category: 'Device', order: 1 },
        { Name: 'Battery', content: '85%', id: '5', class: 'battery', category: 'Device', order: 1 },
        { Name: 'Users', content: 'Signed in as Albert', id: '6', class: 'user', category: 'Device', order: 1 },
        { Name: 'Location', content: 'ON / High accuracy', id: '7', class: 'location', category: 'Personal', order: 2 },
        { Name: 'Security', id: '8', class: 'security', category: 'Personal', order: 2 },
        { Name: 'Languages & input', content: 'English (US)', id: '9', class: 'language', category: 'Personal', order: 2 }
    ];

    // Initialize ListView component
    let listObj: ListView = new ListView({

        //Set defined data to dataSource property
        dataSource: dataSource,

        //Map the appropriate columns to fields property
        fields: { text: 'Name', groupBy: 'order' },

        //Set customized group-header template
        groupTemplate: '<div><span class="category">${items[0].category}</span></div>',

        //Set customized list template
        template: '<div class="settings">'
        + '<div class="icon ${class}"></div>'
        + '<div class="_container"> ${if(content)}'
        + '<div class="name">${Name}</div>'
        + '<div class="content">${content}</div> ${else}'
        + '<div class="_name">${Name}</div> ${/if} </div>'
        + '</div>',

        //Set header title
        headerTitle: 'Settings',

        //Set true to show header title
        showHeader: true

    });

    //Render initialized ListView component
    listObj.appendTo('#groupedList');

};