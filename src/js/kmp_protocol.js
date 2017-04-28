var KMPRegisters = [
    {
        "addr": 60, 
        "desc": "Energy register 1: Heat energy", 
        "reg": "E1"
    }, 
    {
        "addr": 94, 
        "desc": "Energy register 2: Control energy", 
        "reg": "E2"
    }, 
    {
        "addr": 63, 
        "desc": "Energy register 3: Cooling energy", 
        "reg": "E3"
    }, 
    {
        "addr": 61, 
        "desc": "Energy register 4: Flow energy", 
        "reg": "E4"
    }, 
    {
        "addr": 62, 
        "desc": "Energy register 5: Return flow energy", 
        "reg": "E5"
    }, 
    {
        "addr": 95, 
        "desc": "Energy register 6: Tap water energy", 
        "reg": "E6"
    }, 
    {
        "addr": 96, 
        "desc": "Energy register 7: Heat energy Y", 
        "reg": "E7"
    }, 
    {
        "addr": 97, 
        "desc": "Energy register 8: [m3 * T1]", 
        "reg": "E8"
    }, 
    {
        "addr": 110, 
        "desc": "Energy register 9: [m3 * T2]", 
        "reg": "E9"
    }, 
    {
        "addr": 64, 
        "desc": "Tariff register 2", 
        "reg": "TA2"
    }, 
    {
        "addr": 65, 
        "desc": "Tariff register 3", 
        "reg": "TA3"
    }, 
    {
        "addr": 68, 
        "desc": "Volume register V1", 
        "reg": "V1"
    }, 
    {
        "addr": 69, 
        "desc": "Volume register V2", 
        "reg": "V2"
    }, 
    {
        "addr": 84, 
        "desc": "Input register VA", 
        "reg": "VA"
    }, 
    {
        "addr": 85, 
        "desc": "Input register VB", 
        "reg": "VB"
    }, 
    {
        "addr": 72, 
        "desc": "Mass register V1", 
        "reg": "M1"
    }, 
    {
        "addr": 73, 
        "desc": "Mass register V2", 
        "reg": "M2"
    }, 
    {
        "addr": 1004, 
        "desc": "Operational hour counter", 
        "reg": "HR"
    }, 
    {
        "addr": 113, 
        "desc": "Info-event counter", 
        "reg": "INFOEVENT"
    }, 
    {
        "addr": 1002, 
        "desc": "Current time (hhmmss)", 
        "reg": "CLOCK"
    }, 
    {
        "addr": 99, 
        "desc": "Infocode register, current", 
        "reg": "INFO"
    }, 
    {
        "addr": 86, 
        "desc": "Current flow temperature", 
        "reg": "T1"
    }, 
    {
        "addr": 87, 
        "desc": "Current return flow temperature", 
        "reg": "T2"
    }, 
    {
        "addr": 88, 
        "desc": "Current temperature T3", 
        "reg": "T3"
    }, 
    {
        "addr": 122, 
        "desc": "Current temperature T4", 
        "reg": "T4"
    }, 
    {
        "addr": 89, 
        "desc": "Current temperature difference", 
        "reg": "T1-T2"
    }, 
    {
        "addr": 91, 
        "desc": "Pressure in flow", 
        "reg": "P1"
    }, 
    {
        "addr": 92, 
        "desc": "Pressure in return flow", 
        "reg": "P2"
    }, 
    {
        "addr": 74, 
        "desc": "Current flow in flow", 
        "reg": "FLOW1"
    }, 
    {
        "addr": 75, 
        "desc": "Current flow in return flow", 
        "reg": "FLOW2"
    }, 
    {
        "addr": 80, 
        "desc": "Current power calculated on the basis of V1-T1-T2", 
        "reg": "EFFEKT1"
    }, 
    {
        "addr": 123, 
        "desc": "Date for max. this year", 
        "reg": "MAX FLOW1DATE/\u00c5R"
    }, 
    {
        "addr": 124, 
        "desc": "Max. value this year", 
        "reg": "MAX FLOW1/\u00c5R"
    }, 
    {
        "addr": 125, 
        "desc": "Date for min. this year", 
        "reg": "MIN FLOW1DATE/\u00c5R"
    }, 
    {
        "addr": 126, 
        "desc": "Min. value this year", 
        "reg": "MIN FLOW1/\u00c5R"
    }, 
    {
        "addr": 127, 
        "desc": "Date for max. this year", 
        "reg": "MAX EFFEKT1DATE/\u00c5R"
    }, 
    {
        "addr": 128, 
        "desc": "Max. value this year", 
        "reg": "MAX EFFEKT1/\u00c5R"
    }, 
    {
        "addr": 129, 
        "desc": "Date for min. this year", 
        "reg": "MIN EFFEKT1DATE/\u00c5R"
    }, 
    {
        "addr": 130, 
        "desc": "Min. value this year", 
        "reg": "MIN EFFEKT1/\u00c5R"
    }, 
    {
        "addr": 138, 
        "desc": "Date for max. this year", 
        "reg": "MAX FLOW1DATE/M\u00c5NED"
    }, 
    {
        "addr": 139, 
        "desc": "Max. value this year", 
        "reg": "MAX FLOW1/M\u00c5NED"
    }, 
    {
        "addr": 140, 
        "desc": "Date for min. this month", 
        "reg": "MIN FLOW1DATE/M\u00c5NED"
    }, 
    {
        "addr": 141, 
        "desc": "Min. value this month", 
        "reg": "MIN FLOW1/M\u00c5NED"
    }, 
    {
        "addr": 142, 
        "desc": "Date for max. this month", 
        "reg": "MAX EFFEKT1DATE/M\u00c5NED"
    }, 
    {
        "addr": 143, 
        "desc": "Max. value this month", 
        "reg": "MAX EFFEKT1/M\u00c5NED"
    }, 
    {
        "addr": 144, 
        "desc": "Date for min. this month", 
        "reg": "MIN EFFEKT1DATE/M\u00c5NED"
    }, 
    {
        "addr": 145, 
        "desc": "Min. value this month", 
        "reg": "MIN EFFEKT1/M\u00c5NED"
    }, 
    {
        "addr": 146, 
        "desc": "Year-to-date average for T1", 
        "reg": "AVR T1/\u00c5R"
    }, 
    {
        "addr": 147, 
        "desc": "Year-to-date average for T2", 
        "reg": "AVR T2/\u00c5R"
    }, 
    {
        "addr": 149, 
        "desc": "Month-to-date average for T1", 
        "reg": "AVR T1/M\u00c5NED"
    }, 
    {
        "addr": 150, 
        "desc": "Month-to-date average for T2", 
        "reg": "AVR T2/M\u00c5NED"
    }, 
    {
        "addr": 66, 
        "desc": "Tariff limit 2", 
        "reg": "TL2"
    }, 
    {
        "addr": 67, 
        "desc": "Tariff limit 3", 
        "reg": "TL3"
    }, 
    {
        "addr": 98, 
        "desc": "Target date (reading date)", 
        "reg": "XDAY"
    }, 
    {
        "addr": 152, 
        "desc": "Program no. ABCCCCCC", 
        "reg": "PROG NO"
    }, 
    {
        "addr": 153, 
        "desc": "Config no. DDDEE", 
        "reg": "CONFIG NO 1"
    }, 
    {
        "addr": 168, 
        "desc": "Config no. FFGGMN", 
        "reg": "CONFIG NO 2"
    }, 
    {
        "addr": 1001, 
        "desc": "Serial no. (unique number for each meter)", 
        "reg": "SERIE NO"
    }, 
    {
        "addr": 112, 
        "desc": "Customer number (8 most important digits)", 
        "reg": "METER NO 2"
    }, 
    {
        "addr": 1010, 
        "desc": "Customer number (8 less important digits)", 
        "reg": "METER NO 1"
    }, 
    {
        "addr": 114, 
        "desc": "Meter no. for VA", 
        "reg": "METER NO VA"
    }, 
    {
        "addr": 104, 
        "desc": "Meter no. for VB", 
        "reg": "METER NO VB"
    }, 
    {
        "addr": 1005, 
        "desc": "Software edition", 
        "reg": "METER TYPE"
    }, 
    {
        "addr": 154, 
        "desc": "Software check sum", 
        "reg": "CHECK SUM 1"
    }, 
    {
        "addr": 155, 
        "desc": "High-resolution energy register for testing purposes", 
        "reg": "HIGH RES"
    }, 
    {
        "addr": 157, 
        "desc": "ID number for top module ( only mc 601 )", 
        "reg": "TOPMODUL ID"
    }, 
    {
        "addr": 158, 
        "desc": "ID number for base module", 
        "reg": "BOTMODUL ID"
    }
];

var KMPProtocol = function(app, serialPort) {
    var self = this;
    self.app = app;
    self.serialPort = serialPort;
    self.default = {
        bitrate: 1200,
        dataBits: "eight",
        parityBit: "no",
        stopBits: "one",
        timeout: 5000
    };
    self.KMP_CC_TXSTART = 0x80;
    self.KMP_CC_RXSTART = 0x40;
    self.KMP_CC_STOPBYTE = 0x0D;
    self.KMP_CC_ACK = 0x06;
    self.KMP_CC_STUFF = 0x1B;

    self.KMP_UNIT_WH = 0x01;
    self.KMP_UNIT_KWH = 0x02;
    self.KMP_UNIT_MWH = 0x03;
    self.KMP_UNIT_GWH = 0x04;
    self.KMP_UNIT_J = 0x05;
    self.KMP_UNIT_KJ = 0x06;
    self.KMP_UNIT_MJ = 0x07;
    self.KMP_UNIT_GJ = 0x08;
    self.KMP_UNIT_CAL = 0x09;
    self.KMP_UNIT_KCAL = 0x0A;
    self.KMP_UNIT_MCAL = 0x0B;
    self.KMP_UNIT_GCAL = 0x0C;
    self.KMP_UNIT_VARH = 0x0D;
    self.KMP_UNIT_KVARH = 0x0E;
    self.KMP_UNIT_MVARH = 0x0F;
    self.KMP_UNIT_GVARH = 0x10;
    self.KMP_UNIT_VAH = 0x11;
    self.KMP_UNIT_KVAH = 0x12;
    self.KMP_UNIT_MVAH = 0x13;
    self.KMP_UNIT_GVAH = 0x14;
    self.KMP_UNIT_W = 0x15;
    self.KMP_UNIT_KW = 0x16;
    self.KMP_UNIT_MW = 0x17;
    self.KMP_UNIT_GW = 0x18;
    self.KMP_UNIT_VAR = 0x19;
    self.KMP_UNIT_KVAR = 0x1A;
    self.KMP_UNIT_MVAR = 0x1B;
    self.KMP_UNIT_GVAR = 0x1C;
    self.KMP_UNIT_VA = 0x1D;
    self.KMP_UNIT_KVA = 0x1E;
    self.KMP_UNIT_MVA = 0x1F;
    self.KMP_UNIT_GVA = 0x20
    self.KMP_UNIT_V = 0x21;
    self.KMP_UNIT_A = 0x22;
    self.KMP_UNIT_KV = 0x23;
    self.KMP_UNIT_KA = 0x24;
    self.KMP_UNIT_C = 0x25;
    self.KMP_UNIT_K = 0x26;
    self.KMP_UNIT_L = 0x27;
    self.KMP_UNIT_M3 = 0x28;
    self.KMP_UNIT_LH = 0x29;
    self.KMP_UNIT_M3H = 0x2A;
    self.KMP_UNIT_M3XC = 0x2B;
    self.KMP_UNIT_TON = 0x2C;
    self.KMP_UNIT_TONH = 0x2D;
    self.KMP_UNIT_H = 0x2E;
    self.KMP_UNIT_HHMMSS = 0x2F;
    self.KMP_UNIT_YYMMDD = 0x30;
    self.KMP_UNIT_YYYYMMDD = 0x31;
    self.KMP_UNIT_MMDD = 0x32;
    self.KMP_UNIT_NUMMER = 0x33;
    self.KMP_UNIT_BAR = 0x34;

    // 1. Registers are of length "short".
    // 2. You can only read out 8 registers at a time.
    self.Frame = function(start, dest, cid, stop) {
        this.m_start = start;
        this.m_destaddr = dest;
        this.m_cid = cid;
        this.m_buffer = "";
        this.m_crc = 0;
        this.m_stop = stop;

        this.__trans = [
            String.fromCharCode(self.KMP_CC_TXSTART),
            String.fromCharCode(self.KMP_CC_RXSTART),
            String.fromCharCode(self.KMP_CC_STOPBYTE),
            String.fromCharCode(self.KMP_CC_ACK),
            String.fromCharCode(self.KMP_CC_STUFF)
        ];

        this.stuff = function() {
            var i, res = "";
            for(i = 0; i < this.m_buffer.length; i++) {
                if(this.__trans.indexOf(this.m_buffer[i]) >= 0) {
                    res += String.fromCharCode(self.KMP_CC_STUFF);
                    res += String.fromCharCode(~(this.m_buffer.charCodeAt(i)));
                } else {
                    res += this.m_buffer[i];
                }
            }
            return res;
        };

        this.unstuff = function() {
            var i, res = "";
            for(i = 0; i < this.m_buffer.length; i++) {
                if(this.m_buffer[i] == String.fromCharCode(self.KMP_CC_STUFF)) {
                   res += String.fromCharCode(~(this.m_buffer.charCodeAt(++i)));
                } else {
                    res += this.m_buffer[i];
                }
            }
            return res;
        };

        this.crcCalc = function() {
            var data = String.fromCharCode(this.m_destaddr) +
                       String.fromCharCode(this.m_cid) +
                       this.m_buffer;
            var crc_table = [
                0x0000, 0x1021, 0x2042, 0x3063, 0x4084, 0x50a5, 0x60c6, 0x70e7,
                0x8108, 0x9129, 0xa14a, 0xb16b, 0xc18c, 0xd1ad, 0xe1ce, 0xf1ef,
                0x1231, 0x0210, 0x3273, 0x2252, 0x52b5, 0x4294, 0x72f7, 0x62d6,
                0x9339, 0x8318, 0xb37b, 0xa35a, 0xd3bd, 0xc39c, 0xf3ff, 0xe3de,
                0x2462, 0x3443, 0x0420, 0x1401, 0x64e6, 0x74c7, 0x44a4, 0x5485,
                0xa56a, 0xb54b, 0x8528, 0x9509, 0xe5ee, 0xf5cf, 0xc5ac, 0xd58d,
                0x3653, 0x2672, 0x1611, 0x0630, 0x76d7, 0x66f6, 0x5695, 0x46b4,
                0xb75b, 0xa77a, 0x9719, 0x8738, 0xf7df, 0xe7fe, 0xd79d, 0xc7bc,
                0x48c4, 0x58e5, 0x6886, 0x78a7, 0x0840, 0x1861, 0x2802, 0x3823,
                0xc9cc, 0xd9ed, 0xe98e, 0xf9af, 0x8948, 0x9969, 0xa90a, 0xb92b,
                0x5af5, 0x4ad4, 0x7ab7, 0x6a96, 0x1a71, 0x0a50, 0x3a33, 0x2a12,
                0xdbfd, 0xcbdc, 0xfbbf, 0xeb9e, 0x9b79, 0x8b58, 0xbb3b, 0xab1a,
                0x6ca6, 0x7c87, 0x4ce4, 0x5cc5, 0x2c22, 0x3c03, 0x0c60, 0x1c41,
                0xedae, 0xfd8f, 0xcdec, 0xddcd, 0xad2a, 0xbd0b, 0x8d68, 0x9d49,
                0x7e97, 0x6eb6, 0x5ed5, 0x4ef4, 0x3e13, 0x2e32, 0x1e51, 0x0e70,
                0xff9f, 0xefbe, 0xdfdd, 0xcffc, 0xbf1b, 0xaf3a, 0x9f59, 0x8f78,
                0x9188, 0x81a9, 0xb1ca, 0xa1eb, 0xd10c, 0xc12d, 0xf14e, 0xe16f,
                0x1080, 0x00a1, 0x30c2, 0x20e3, 0x5004, 0x4025, 0x7046, 0x6067,
                0x83b9, 0x9398, 0xa3fb, 0xb3da, 0xc33d, 0xd31c, 0xe37f, 0xf35e,
                0x02b1, 0x1290, 0x22f3, 0x32d2, 0x4235, 0x5214, 0x6277, 0x7256,
                0xb5ea, 0xa5cb, 0x95a8, 0x8589, 0xf56e, 0xe54f, 0xd52c, 0xc50d,
                0x34e2, 0x24c3, 0x14a0, 0x0481, 0x7466, 0x6447, 0x5424, 0x4405,
                0xa7db, 0xb7fa, 0x8799, 0x97b8, 0xe75f, 0xf77e, 0xc71d, 0xd73c,
                0x26d3, 0x36f2, 0x0691, 0x16b0, 0x6657, 0x7676, 0x4615, 0x5634,
                0xd94c, 0xc96d, 0xf90e, 0xe92f, 0x99c8, 0x89e9, 0xb98a, 0xa9ab,
                0x5844, 0x4865, 0x7806, 0x6827, 0x18c0, 0x08e1, 0x3882, 0x28a3,
                0xcb7d, 0xdb5c, 0xeb3f, 0xfb1e, 0x8bf9, 0x9bd8, 0xabbb, 0xbb9a,
                0x4a75, 0x5a54, 0x6a37, 0x7a16, 0x0af1, 0x1ad0, 0x2ab3, 0x3a92,
                0xfd2e, 0xed0f, 0xdd6c, 0xcd4d, 0xbdaa, 0xad8b, 0x9de8, 0x8dc9,
                0x7c26, 0x6c07, 0x5c64, 0x4c45, 0x3ca2, 0x2c83, 0x1ce0, 0x0cc1,
                0xef1f, 0xff3e, 0xcf5d, 0xdf7c, 0xaf9b, 0xbfba, 0x8fd9, 0x9ff8,
                0x6e17, 0x7e36, 0x4e55, 0x5e74, 0x2e93, 0x3eb2, 0x0ed1, 0x1ef0
              ];
            var lookup,
                newcrc = 0,
                i;
            for (i = 0; i < data.length; i++) {
                lookup = crc_table[((newcrc >> 8) ^ data.charCodeAt(i)) & 0xff];
                newcrc = ((newcrc << 8) & 0xffff);
                newcrc = (newcrc ^ lookup);
            }

            return newcrc;
        };

        this.setBuffer = function(buf) {
            this.m_buffer = buf;
        };

        this.toString = function() {
           return String.fromCharCode(this.m_start) +
                  String.fromCharCode(this.m_destaddr) +
                  String.fromCharCode(this.m_cid) +
                  this.stuff() +
                  self.htons(this.crcCalc()) + 
                  String.fromCharCode(this.m_stop);
        };
    };
};
KMPProtocol.prototype.htons = function(v) {
    // Mask off 8 bytes at a time then shift them into place
    return String.fromCharCode((0xff & (v >> 8))) +
           String.fromCharCode((0xff & (v)));
};
KMPProtocol.prototype.ntohs = function(b) {
    return ((0xff & b.charCodeAt(0)) << 8) | 
           ((0xff & b.charCodeAt(1)));
};
KMPProtocol.prototype.ntohl = function(b) {
    return ((0xff & b.charCodeAt(0)) << 24) |
           ((0xff & b.charCodeAt(1)) << 16) |
           ((0xff & b.charCodeAt(2)) << 8) |
           ((0xff & b.charCodeAt(3)));
};
KMPProtocol.prototype.parseRegisterData = function(data, data_len, ex) {
    var value, integer;

    if(data_len == 2) {
        integer = this.ntohs(data);
    } else if(data_len == 4) {
        integer = this.ntohl(data);
    } else {
        Materialize.toast("Unmanaged register size: " + data_len, 2000);
    }

    /**
    *  Sign + exponent
    *  Bit  7  6  5  4  3  2  1  0
    *    SI SE E5 E4 E3 E2 E1 E0
    */
    var si = (ex & 0x80) >> 7;
    var se = (ex & 0x40) >> 6;
    var exponent = ex & 0x3f;

    /* Floating point value = -1^SI ⋅ (integer) ⋅ 10 (-1^SE) ⋅ exponent */
    value = Math.pow(-1, si) * integer * Math.pow(10, Math.pow(-1, se) * exponent);
    return value;
};
KMPProtocol.prototype.normalizeRegisterData = function(unitid, value) {
    var self = this;

    switch(unitid) {
    /* This is the wanted output */
    case self.KMP_UNIT_MWH:
    case self.KMP_UNIT_KW:
    case self.KMP_UNIT_M3:
    case self.KMP_UNIT_C:
    case self.KMP_UNIT_K:
    case self.KMP_UNIT_LH:
    break;

    /* To MWh */
    case self.KMP_UNIT_WH:
        value *= 10e-6;
    break;
    case self.KMP_UNIT_KWH:
        value *= 10e-3;
    break;
    case self.KMP_UNIT_GWH:
        value *= 10e3;
    break;
    case self.KMP_UNIT_J:
        value /= 3.6e9;
    break;
    case self.KMP_UNIT_KJ:
        value /= 3.6e6;
    break;
    case self.KMP_UNIT_MJ:
        value /= 3.6e3;
    break;
    case self.KMP_UNIT_GJ:
        value /= 3.6;
    break;
    case self.KMP_UNIT_CAL:
        value /= 3.6e9 * JOULES_PER_CALORIE;
    break;
    case self.KMP_UNIT_KCAL:
        value /= 3.6e6 * JOULES_PER_CALORIE;
    break;
    case self.KMP_UNIT_MCAL:
        value /= 3.6e3 * JOULES_PER_CALORIE;
    break;
    case self.KMP_UNIT_GCAL:
        value /= 3.6 * JOULES_PER_CALORIE;
    break;

    /* To kW */
    case self.KMP_UNIT_W:
        value *= 10e-3;
    break;
    case self.KMP_UNIT_MW:
        value *= 10e3;
    break;
    case self.KMP_UNIT_GW:
        value *= 10e6;
    break;

    /* To m^3 */
    case self.KMP_UNIT_L:
        value *= 10e-3;
    break;

    /* To liter/hour */
    case self.KMP_UNIT_M3H:
        value *= 10e3;
    break;

    default:
        Materialize.toast("Unknown unit: "+ unitid, 2000);
        /* NOTREACHED */
    break;
    }

    return value;
};

KMPProtocol.prototype.performReadout = function(callback, registers) {
    var self = this;
    self.final_callback = callback;
    self.serialPort.state = 'recv';
    self.serialPort.timer = self.default.timeout;
    self.serialPort.eot_char = String.fromCharCode(self.KMP_CC_STOPBYTE);

    var frame = new this.Frame(0x80, 0x3f, 0x10, 0x0d),
        i = 0;
    // Frame Data
    // 1. Register Count
    // 2. List of shorts with reg addr
    var frameData = String.fromCharCode(registers.length);
    for(i = 0; i < registers.length; i++) {
        frameData += self.htons(registers[i]);
    }
    frame.setBuffer(frameData);

    self._track_registers = registers;

    chrome.serial.update(self.serialPort.connectionId, {
        bitrate: self.default.bitrate, 
        dataBits: self.default.dataBits,
        parityBit: self.default.parityBit,
        stopBits: self.default.stopBits
    }, function(result) {
        chrome.serial.send(self.serialPort.connectionId, str2ab(frame.toString()), function(result) {
            self.stage2.call(self, result);
        });
    });
};
KMPProtocol.prototype.stage2 = function(result) {
    var self = this;
    self.serialPort.recvWatchdog(function(data) {
        var records = [];

        if(data.length > 5) {
            var frame = new self.Frame(
                data.charCodeAt(0),
                data.charCodeAt(1),
                data.charCodeAt(2),
                data.charCodeAt(data.length-1)
            );
            frame.m_crc = self.ntohs(data.slice(data.length - 3));
            frame.setBuffer(data.slice(3, data.length - 3));
            frame.setBuffer(frame.unstuff());

            var regLut = {};
            $.each(KMPRegisters, function(index, item) {
                regLut[item.addr] = item;
            });

            var i = 0;
            while(i < frame.m_buffer.length && records.length < self._track_registers.length) {
                i += 2;
                var unit_id = frame.m_buffer.charCodeAt(i++),
                    numbytes = frame.m_buffer.charCodeAt(i++),
                    signexp = frame.m_buffer.charCodeAt(i++),
                    regval = self.parseRegisterData(frame.m_buffer.slice(i), numbytes, signexp),
                    regval = self.normalizeRegisterData(unit_id, regval);
                records.push({
                    func: regLut[self._track_registers[records.length]].reg,
                    desc: regLut[self._track_registers[records.length]].desc,
                    value: regval
                });
                i += numbytes;
            }
        } else {
            Materialize.toast("Timeout occured", 2000);
        }

        self.final_callback(records);
    });
};