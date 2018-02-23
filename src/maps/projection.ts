/**
 * Changing projection sample
 */

import { Maps, Zoom, Legend, ProjectionType, MapsTooltip, ILoadEventArgs, MapsTheme } from '@syncfusion/ej2-maps';
import { World_Map } from './MapData/WorldMap';
import { unCountries } from './MapData/UNOCountries';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

Maps.Inject(Zoom, Legend, MapsTooltip);

let worldMap: object = World_Map;
this.default = (): void => {
let maps: Maps = new Maps({
    load: (args: ILoadEventArgs) => {
        let theme: string = location.hash.split('/')[1];
        theme = theme ? theme : 'Material';
        args.maps.theme = <MapsTheme>(theme.charAt(0).toUpperCase() + theme.slice(1));
    },
    titleSettings: {
        text: 'Members of the UN Security Council',
        textStyle: {
            size: '16px'
        },
        subtitleSettings: {
            text: '- In 2017',
            alignment: 'Far'
        }
    },
    legendSettings: {
        visible: true
    },
    zoomSettings: {
        enable: false
    },
    layers: [
        {
            shapeData: worldMap,
            shapeDataPath: 'Country',
            shapePropertyPath: 'name',
            dataSource : unCountries,
            tooltipSettings: {
                visible: true,
                valuePath: 'Country',
            },
            shapeSettings: {
                fill: '#E5E5E5',
                colorMapping: [
                    {
                        value: 'Permanent',
                        color: '#EDB46F'
                    },
                    {
                        color: '#F1931B',
                        value: 'Non-Permanent'
                    }
                ],
                colorValuePath: 'Membership'
            }
        }
    ]
});
maps.appendTo('#container');
let projection: DropDownList = new DropDownList({
    index: 0,
    placeholder: 'Select projection type',
    width: 120,
    change: () => {
        maps.projectionType = <ProjectionType>projection.value;
        maps.refresh();
    }
});
projection.appendTo('#projectiontype');
};