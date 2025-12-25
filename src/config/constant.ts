import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import errorCodes from './errorCode.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const temporaryFileStoragePath = path.join(__dirname, '../../tmp');
const metaStorageFilePath = path.join(__dirname, '../../meta.json');

if (!fs.existsSync(temporaryFileStoragePath)) fs.mkdirSync(temporaryFileStoragePath);
if (!fs.existsSync(metaStorageFilePath)) fs.writeFileSync(metaStorageFilePath, JSON.stringify({}));

export default {
  temporaryFileStoragePath,
  metaStorageFilePath,

  user: {
    token: {
      expiryInSeconds: 86400,
    },
  },

  errorCodes,

  ioElementLabels: {
    zone_1: {
      name: 'Zone 1',
      type: 'analog',
      validate: (value: number) => value > 0,
      priority: 2,
    },
    zone_2: {
      name: 'Zone 2',
      type: 'analog',
      validate: (value: number) => value > 0,
      priority: 2,
    },
    zone_3: {
      name: 'Zone 3',
      type: 'analog',
      validate: (value: number) => value > 0,
      priority: 2,
    },
    zone_4: {
      name: 'Zone 4',
      type: 'analog',
      validate: (value: number) => value > 0,
      priority: 2,
    },
    external_voltage: {
      name: 'External Voltage',
      type: 'analog',
      validate: (value: number) => value > 0,
      priority: 1,
    },
    battery_level: {
      name: 'Battery Level',
      type: 'analog',
      validate: (value: number) => value > 0,
      priority: 1,
    },
    battery_voltage: {
      name: 'Battery Voltage',
      type: 'analog',
      validate: (value: number) => value > 0,
      priority: 1,
    },

    alarm_panel_external_voltage: {
      name: 'Alarm Panel External Voltage',
      type: 'analog',
      validate: (value: number) => value > 0,
      priority: 1,
    },
    alarm_panel_battery_level: {
      name: 'Alarm Panel Battery Level',
      type: 'analog',
      validate: (value: number) => value > 0,
      priority: 1,
    },
    alarm_panel_battery_voltage: {
      name: 'Alarm Panel Battery Voltage',
      type: 'analog',
      validate: (value: number) => value > 0,
      priority: 1,
    },

    diesel_pump_battery_level: {
      name: 'Diesel Pump Battery Level',
      type: 'analog',
      validate: (value: number) => value > 0,
      priority: 1,
    },
    diesel_pump_tank_level: {
      name: 'Diesel Tank Level',
      type: 'analog',
      validate: (value: number) => value > 0,
      priority: 1,
    },
    underground_tank_level: {
      name: 'Underground Tank Level',
      type: 'analog',
      validate: (value: number) => value > 0,
      priority: 1,
    },
    overhead_tank_level: {
      name: 'Overhead Tank Level',
      type: 'analog',
      validate: (value: number) => value > 0,
      priority: 1,
    },
    voltage_r: {
      name: 'Voltage R',
      type: 'analog',
      validate: (value: number) => value > 0,
      priority: 1,
    },
    voltage_y: {
      name: 'Voltage Y',
      type: 'analog',
      validate: (value: number) => value > 0,
      priority: 1,
    },
    voltage_b: {
      name: 'Voltage B',
      type: 'analog',
      validate: (value: number) => value > 0,
      priority: 1,
    },
    ampere_r: {
      name: 'Ampere R',
      type: 'analog',
      validate: (value: number) => value > 0,
      priority: 1,
    },
    ampere_y: {
      name: 'Ampere Y',
      type: 'analog',
      validate: (value: number) => value > 0,
      priority: 1,
    },
    ampere_b: {
      name: 'Ampere B',
      type: 'analog',
      validate: (value: number) => value > 0,
      priority: 1,
    },
    pressure_switch: {
      name: 'Pressure Switch',
      type: 'analog',
      validate: (value: number) => value > 0,
      priority: 1,
    },
    line_pressure: {
      name: 'Line Pressure',
      type: 'analog',
      validate: (value: number) => value > 0,
    },
    pump_panel_mode: {
      name: 'Pump Panel Mode',
      type: 'analog',
      priority: 0,
    },
    gsm_signal: {
      name: 'GSM Signal',
      type: 'analog',
      priority: 1,
    },
  },

  ioElementParameterIds: {
    // 1: {
    //   name: 'Digital Input 1',
    //   type: 'digital',
    // },
    // 2: {
    //   name: 'Digital Input 2',
    //   type: 'digital',
    // },
    // 3: {
    //   name: 'Digital Input 3',
    //   type: 'digital',
    // },
    // 6: {
    //   name: 'Analog Input 2',
    //   type: 'analog',
    // },
    // 9: {
    //   name: 'Analog Input 1',
    //   type: 'analog',
    // },
    21: {
      name: 'GSM Signal',
      type: 'analog',
    },
    // 66: {
    //   name: 'External Voltage',
    //   type: 'analog',
    // },
    // 67: {
    //   name: 'Battery Voltage',
    //   type: 'analog',
    // },
    // 113: {
    //   name: 'Battery Level',
    //   type: 'analog',
    // },
    // 239: {
    //   name: 'Ignition',
    //   type: 'digital',
    //   default_label: 'ignition',
    // },
    // 240: {
    //   name: 'Movement',
    //   type: 'digital',
    // },
    // 270: {
    //   name: 'BLE Fuel Level #1',
    //   type: 'analog',
    //   default_label: 'fuel_level',
    // },
    // 273: {
    //   name: 'BLE Fuel Level #2',
    //   type: 'analog',
    // },

    A0: {
      name: 'Analog Input 0',
      type: 'analog',
    },
    A1: {
      name: 'Analog Input 1',
      type: 'analog',
    },
    A2: {
      name: 'Analog Input 2',
      type: 'analog',
    },
    A3: {
      name: 'Analog Input 3',
      type: 'analog',
    },
    A4: {
      name: 'Analog Input 4',
      type: 'analog',
    },
    A5: {
      name: 'Analog Input 5',
      type: 'analog',
    },
    A6: {
      name: 'Analog Input 6',
      type: 'analog',
    },
    A7: {
      name: 'Analog Input 7',
      type: 'analog',
    },
    A8: {
      name: 'Analog Input 8',
      type: 'analog',
    },
    A9: {
      name: 'Analog Input 9',
      type: 'analog',
    },
    VR: {
      name: 'Voltage R',
      type: 'analog',
    },
    VY: {
      name: 'Voltage Y',
      type: 'analog',
    },
    VB: {
      name: 'Voltage B',
      type: 'analog',
    },
    IA: {
      name: 'Ampere A',
      type: 'analog',
    },
    IB: {
      name: 'Ampere B',
      type: 'analog',
    },
    IC: {
      name: 'Ampere C',
      type: 'analog',
    },
  },

  occupancyTypes: [
    'Residential Buildings',
    'Hotels',
    'Educational Buildings',
    'Institutional Buildings',
    'Custodial/Penal/Mental',
    'Assembly Buildings',
    'Business Buildings',
    'Mercantile Buildings',
    'Industrial Buildings',
    'Storage Buildings',
    'Hazardous Buildings',
  ],

  orderStatuses: [
    'pending',
    'processing',
    'shipped',
    'delivered',
    'installed',
    'completed',
  ],

  pumpTypes: ['main', 'jockey', 'diesel', 'curtain', 'sprinkler', 'terrace'],

  pumpBrands: ['Kirloskar', 'Lubi'],

  customerAlertOperators: ['>', '<', '=', '>=', '<=', '!='] as const,
  userAlertOperators: ['>', '<', '=', '>=', '<=', '!='] as const,
};
