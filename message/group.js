function _0x831a(_0x43272a, _0x4298cb) {
    const _0xb7fea3 = _0xc0c5();
    return _0x831a = function (_0x3ad03b, _0x5b8ca3) {
        _0x3ad03b = _0x3ad03b - 0x115;
        let _0xc0c5b8 = _0xb7fea3[_0x3ad03b];
        return _0xc0c5b8;
    }, _0x831a(_0x43272a, _0x4298cb);
}
const _0xdd01e8 = _0x831a;
(function (_0x364ba4, _0x5f5508) {
    const _0x288470 = _0x831a,
        _0x2d5b5a = _0x364ba4();
    while (!![]) {
        try {
            const _0x2c9700 = parseInt(_0x288470(0x144)) / 0x1 * (parseInt(_0x288470(0x12f)) / 0x2) + parseInt(_0x288470(0x12c)) / 0x3 * (parseInt(_0x288470(0x150)) / 0x4) + parseInt(_0x288470(0x141)) / 0x5 * (parseInt(_0x288470(0x123)) / 0x6) + parseInt(_0x288470(0x12d)) / 0x7 * (-parseInt(_0x288470(0x12a)) / 0x8) + parseInt(_0x288470(0x11b)) / 0x9 + -parseInt(_0x288470(0x143)) / 0xa + parseInt(_0x288470(0x125)) / 0xb * (-parseInt(_0x288470(0x118)) / 0xc);
            if (_0x2c9700 === _0x5f5508) break;
            else _0x2d5b5a['push'](_0x2d5b5a['shift']());
        } catch (_0x29215b) {
            _0x2d5b5a['push'](_0x2d5b5a['shift']());
        }
    }
}(_0xc0c5, 0xbf6dc));
const _0x5b8ca3 = function () {
        let _0x1636fd = !![];
        return function (_0x4f91d3, _0x5afb61) {
            const _0x131e95 = _0x1636fd ? function () {
                if (_0x5afb61) {
                    const _0xd54c6e = _0x5afb61['apply'](_0x4f91d3, arguments);
                    return _0x5afb61 = null, _0xd54c6e;
                }
            } : function () {};
            return _0x1636fd = ![], _0x131e95;
        };
    }(),
    _0x3ad03b = _0x5b8ca3(this, function () {
        const _0x58efc8 = _0x831a;
        return _0x3ad03b[_0x58efc8(0x128)]()[_0x58efc8(0x120)](_0x58efc8(0x14c))['toString']()[_0x58efc8(0x12b)](_0x3ad03b)['search'](_0x58efc8(0x14c));
    });
_0x3ad03b();

function _0xc0c5() {
    const _0x5a91f2 = ['49737MxZYil', '21gQhQaN', 'groupMetadata', '2CFQLOQ', 'message', 'split', 'DISCRIPTION', 'length', 'user', 'DD/MM/YYYY', 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60', 'red', 'locationMessage', 'prefix', 'menu', 'remove', 'status', 'hh:mm', 'moment-timezone', 'notify', 'https://i.postimg.cc/SN54m6LW/SAVE-20210728-133334.jpg', '95720DZBlYP', '\x0a\x20*Rᴇsᴛ\x20Nᴏᴡ\x20Pᴇᴀᴄᴇ*\x20🌹\x0a', '8496600eaRaXM', '1060937SfSBTE', 'exports', '*\x0a🌹\x20*Wᴇʟᴄᴏᴍᴇ\x20Tᴏ*\x20\x0a\x20*', 'hehe', 'Asia/Kolkata', 'includes', 'log', 'getdeskgc', '(((.+)+)+)+$', 'participants', '\x20-\x20\x20', 'contacts', '368ewQziR', 'jid', 'sendMessage', 'action', 'location', 'format', '15126924lZJZoy', '../lib/myfunc', '*Gᴏᴏᴅ\x20Bʏᴇ\x20Bʀᴏᴛʜᴇʀ*\x20👋\x0a@', '13372254xekIQt', 'parse', '\x0a🌹\x20*Bɪᴏ*\x20:\x20*', 'vname', 'buttonsMessage', 'search', '0@s.whatsapp.net', 'conversation', '114eGbIJk', 'fs-extra', '11kQDMWv', '@adiwajshing/baileys', 'ephemeralMessage', 'toString', 'add', '4110448sdSexc', 'constructor'];
    _0xc0c5 = function () {
        return _0x5a91f2;
    };
    return _0xc0c5();
}
const {
    MessageType,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    WA_DEFAULT_EPHEMERAL
} = require(_0xdd01e8(0x126)), fs = require(_0xdd01e8(0x124)), moment = require(_0xdd01e8(0x13e)), {
    getBuffer
} = require(_0xdd01e8(0x119)), {
    color,
    bgcolor
} = require('../lib/color');
let setting = JSON[_0xdd01e8(0x11c)](fs['readFileSync']('./setting.json'));
prefix = setting[_0xdd01e8(0x139)], module[_0xdd01e8(0x145)] = welcome = async (_0x5b03ed, _0x330664) => {
    const _0x179590 = _0xdd01e8;
    try {
        const _0x415678 = await _0x5b03ed[_0x179590(0x12e)](_0x330664['jid']);
        mem = _0x330664[_0x179590(0x14d)][0x0], console[_0x179590(0x14a)](_0x330664);
        try {
            pp_user = await _0x5b03ed['getProfilePicture'](mem);
        } catch (_0x3e8a96) {
            pp_user = _0x179590(0x136);
        }
        try {
            pp_grup = await _0x5b03ed['getProfilePicture'](_0x330664[_0x179590(0x151)]);
        } catch (_0x2d0b77) {
            pp_grup = _0x179590(0x140);
        }
        hehe = await getBuffer(pp_user);
        _0x330664[_0x179590(0x115)] == _0x179590(0x129) && mem[_0x179590(0x149)](_0x5b03ed[_0x179590(0x134)][_0x179590(0x151)]) && _0x5b03ed[_0x179590(0x152)](_0x330664['jid'], 'hello\x20bro\x20I\x20am\x20A\x20Bot\x20😎🌹\x20To\x20use\x20' + prefix + _0x179590(0x13a), _0x179590(0x122));
        if (_0x330664[_0x179590(0x115)] == _0x179590(0x129) && !mem[_0x179590(0x149)](_0x5b03ed[_0x179590(0x134)]['jid'])) {
            const _0x376956 = await _0x5b03ed['groupMetadata'](_0x330664[_0x179590(0x151)]),
                _0x4717df = _0x376956[_0x179590(0x14d)][_0x179590(0x133)],
                _0x58c524 = await _0x5b03ed['getStatus'](_0x330664['participants'][0x0], MessageType['text']),
                _0xd67b8f = _0x330664[_0x179590(0x14d)][0x0],
                _0x55f047 = await _0x5b03ed['prepareMessage'](_0x179590(0x121), hehe, MessageType[_0x179590(0x116)], {
                    'thumbnail': hehe
                }),
                _0x3b50a3 = _0x55f047[_0x179590(0x130)][_0x179590(0x127)] ? _0x55f047[_0x179590(0x130)][_0x179590(0x127)] : _0x55f047;
            let _0x3f1e95 = _0x5b03ed['contacts'][_0xd67b8f] || {
                'notify': _0xd67b8f['replace'](/@.+/, '')
            };
            anu_user = _0x3f1e95[_0x179590(0x11e)] || _0x3f1e95[_0x179590(0x13f)] || _0xd67b8f[_0x179590(0x131)]('@')[0x0], time_welc = moment['tz'](_0x179590(0x148))[_0x179590(0x117)](_0x179590(0x135)), time_wel = moment['tz'](_0x179590(0x148))['format'](_0x179590(0x13d)), teks = '🌹\x20*Hɪ*\x20@' + _0xd67b8f[_0x179590(0x131)]('@')[0x0] + _0x179590(0x11d) + _0x58c524[_0x179590(0x13c)] + '*\x0a🌹\x20*Mᴇᴍʙᴇʀs\x20:\x20' + _0x4717df + _0x179590(0x146) + _0x376956['subject'] + '*\x0a🌹\x20*Dᴏɴᴛ\x20Fᴏʀɢᴇᴛ\x20Dɪsᴄʀɪᴘᴛɪᴏɴ*\x0a\x20' + time_wel + _0x179590(0x14e) + time_welc, welcomeBut = [{
                'buttonId': prefix + _0x179590(0x14b),
                'buttonText': {
                    'displayText': _0x179590(0x132)
                },
                'type': 0x1
            }, {
                'buttonId': prefix + 'sc',
                'buttonText': {
                    'displayText': 'SC'
                },
                'type': 0x1
            }], welcomeButt = {
                'contentText': '\u00a0',
                'footerText': '' + teks,
                'buttons': welcomeBut,
                'headerType': 0x6,
                'locationMessage': _0x3b50a3[_0x179590(0x130)][_0x179590(0x138)]
            }, _0x5b03ed[_0x179590(0x152)](_0x376956['id'], welcomeButt, MessageType[_0x179590(0x11f)], {
                'caption': _0x179590(0x147),
                'contextInfo': {
                    'mentionedJid': [_0xd67b8f]
                }
            });
        }
        if (_0x330664['action'] == _0x179590(0x13b) && !mem['includes'](_0x5b03ed[_0x179590(0x134)]['jid'])) {
            const _0x17ad59 = await _0x5b03ed[_0x179590(0x12e)](_0x330664[_0x179590(0x151)]),
                _0x251148 = _0x330664[_0x179590(0x14d)][0x0],
                _0x5a65b3 = await _0x5b03ed['prepareMessage'](_0x179590(0x121), hehe, MessageType[_0x179590(0x116)], {
                    'thumbnail': hehe
                }),
                _0x1d49e5 = _0x5a65b3[_0x179590(0x130)][_0x179590(0x127)] ? _0x5a65b3['message'][_0x179590(0x127)] : _0x5a65b3;
            let _0x20f32a = _0x5b03ed[_0x179590(0x14f)][_0x251148] || {
                'notify': _0x251148['replace'](/@.+/, '')
            };
            anu_user = _0x20f32a[_0x179590(0x11e)] || _0x20f32a[_0x179590(0x13f)] || _0x251148[_0x179590(0x131)]('@')[0x0], time_welc = moment['tz']('Asia/Kolkata')[_0x179590(0x117)](_0x179590(0x135)), time_wel = moment['tz'](_0x179590(0x148))[_0x179590(0x117)](_0x179590(0x13d)), memeg = _0x17ad59[_0x179590(0x14d)][_0x179590(0x133)], out = _0x179590(0x11a) + _0x251148[_0x179590(0x131)]('@')[0x0] + _0x179590(0x142) + time_wel + _0x179590(0x14e) + time_welc, goodbyeBut = [{
                'buttonId': prefix + 'h',
                'buttonText': {
                    'displayText': 'GET\x20OUT\x20🚪'
                },
                'type': 0x1
            }, {
                'buttonId': prefix + 'sc',
                'buttonText': {
                    'displayText': 'SC'
                },
                'type': 0x1
            }], goodbyeButt = {
                'contentText': '\x20',
                'footerText': '' + out,
                'buttons': goodbyeBut,
                'headerType': 0x6,
                'locationMessage': _0x5a65b3[_0x179590(0x130)]['locationMessage']
            }, _0x5b03ed[_0x179590(0x152)](_0x17ad59['id'], goodbyeButt, MessageType[_0x179590(0x11f)], {
                'caption': 'hehe',
                'contextInfo': {
                    'mentionedJid': [_0x251148]
                }
            });
        }
    } catch (_0x11ac5c) {
        console['log']('Error\x20:\x20%s', color(_0x11ac5c, _0x179590(0x137)));
    }
};