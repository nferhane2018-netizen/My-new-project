<!DOCTYPE html>

<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>SpendX</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet">
<style>
:root {
  --bg: #F7F6F2;
  --bg2: #FFFFFF;
  --bg3: #F0EEE8;
  --card: #FFFFFF;
  --border: #E8E4DC;
  --border2: #D8D3C8;
  --text: #1A1814;
  --text2: #7A7468;
  --text3: #B0A99E;
  --accent: #2D6A4F;
  --accent-light: #E8F4EE;
  --accent2: #52B788;
  --red: #C1121F;
  --red-light: #FDEAEB;
  --green: #2D6A4F;
  --green-light: #E8F4EE;
  --amber: #B5541A;
  --amber-light: #FDF0E8;
  --blue: #1B4F72;
  --blue-light: #E8F1F8;
  --shadow: 0 1px 3px rgba(26,24,20,.06), 0 4px 12px rgba(26,24,20,.04);
  --shadow-md: 0 4px 16px rgba(26,24,20,.1);
  --radius: 18px;
  --radius-sm: 12px;
}
*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent;}
body{font-family:'Cairo',sans-serif;background:var(--bg);color:var(--text);min-height:100vh;max-width:430px;margin:0 auto;overflow-x:hidden;padding-bottom:88px;}
input,select,button{font-family:'Cairo',sans-serif;}
::-webkit-scrollbar{width:0;}

.screen{display:none;}
.screen.show{display:block;}

/* AUTH */
.auth-wrap{min-height:100vh;display:flex;flex-direction:column;background:var(–bg);}
.auth-hero{background:linear-gradient(150deg,#152D22 0%,#2D6A4F 55%,#52B788 100%);padding:60px 28px 52px;position:relative;overflow:hidden;}
.auth-hero::after{content:’’;position:absolute;bottom:-32px;left:-20px;right:-20px;height:64px;background:var(–bg);border-radius:50% 50% 0 0/32px 32px 0 0;}
.auth-dots{position:absolute;inset:0;opacity:.05;background-image:radial-gradient(circle,#fff 1px,transparent 1px);background-size:24px 24px;}
.auth-logo{font-family:‘DM Serif Display’,serif;font-size:38px;color:#fff;letter-spacing:-1px;position:relative;z-index:1;}
.auth-logo em{color:#52B788;font-style:normal;}
.auth-tag{color:rgba(255,255,255,.65);font-size:13px;margin-top:4px;position:relative;z-index:1;}
.auth-body{padding:36px 24px 32px;flex:1;}
.auth-h{font-size:22px;font-weight:800;margin-bottom:4px;}
.auth-sub{font-size:13px;color:var(–text2);margin-bottom:26px;}

.ff{margin-bottom:15px;}
.fl{display:block;font-size:11px;font-weight:700;color:var(–text2);margin-bottom:6px;letter-spacing:.5px;text-transform:uppercase;}
.fi{width:100%;background:var(–card);border:1.5px solid var(–border);border-radius:var(–radius-sm);padding:13px 15px;font-size:15px;color:var(–text);outline:none;transition:.2s;}
.fi:focus{border-color:var(–accent);box-shadow:0 0 0 3px rgba(45,106,79,.1);}
.fi::placeholder{color:var(–text3);}

.btn-p{width:100%;background:var(–accent);color:#fff;border:none;border-radius:var(–radius-sm);padding:15px;font-size:15px;font-weight:700;cursor:pointer;transition:.15s;margin-top:4px;}
.btn-p:active{opacity:.88;}
.btn-o{width:100%;background:transparent;color:var(–accent);border:1.5px solid var(–border2);border-radius:var(–radius-sm);padding:13px;font-size:14px;font-weight:600;cursor:pointer;transition:.15s;margin-top:10px;}
.btn-o:active{background:var(–accent-light);}

.divider{display:flex;align-items:center;gap:12px;margin:18px 0;color:var(–text3);font-size:12px;}
.divider::before,.divider::after{content:’’;flex:1;height:1px;background:var(–border);}
.auth-sw{text-align:center;margin-top:18px;font-size:13px;color:var(–text2);}
.auth-sw a{color:var(–accent);font-weight:700;cursor:pointer;}

.ava-row{display:flex;gap:9px;flex-wrap:wrap;margin-bottom:4px;}
.ava-o{width:46px;height:46px;border-radius:13px;display:flex;align-items:center;justify-content:center;font-size:22px;cursor:pointer;border:2px solid var(–border);background:var(–bg3);transition:.15s;}
.ava-o.sel{border-color:var(–accent);background:var(–accent-light);transform:scale(1.08);}

/* HEADER */
.hdr{display:flex;align-items:center;justify-content:space-between;padding:15px 18px 11px;position:sticky;top:0;z-index:100;background:rgba(247,246,242,.93);backdrop-filter:blur(12px);border-bottom:1px solid var(–border);}
.hdr-logo{font-family:‘DM Serif Display’,serif;font-size:22px;color:var(–accent);letter-spacing:-.5px;}
.hdr-r{display:flex;gap:8px;align-items:center;}
.ico-btn{width:36px;height:36px;border-radius:10px;background:var(–card);border:1px solid var(–border);display:flex;align-items:center;justify-content:center;font-size:16px;cursor:pointer;box-shadow:var(–shadow);}
.u-ava{width:36px;height:36px;border-radius:10px;background:var(–accent);color:#fff;display:flex;align-items:center;justify-content:center;font-size:18px;cursor:pointer;}

/* NAV */
.bnav{position:fixed;bottom:0;left:50%;transform:translateX(-50%);width:100%;max-width:430px;background:var(–card);border-top:1px solid var(–border);display:flex;z-index:200;padding:7px 0 14px;box-shadow:0 -4px 20px rgba(26,24,20,.06);}
.ni{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;padding:5px 4px;cursor:pointer;border:none;background:none;color:var(–text3);font-size:10px;font-weight:600;transition:.15s;letter-spacing:.3px;}
.ni svg{width:22px;height:22px;stroke-width:1.8;}
.ni.act{color:var(–accent);}
.ni.act svg{stroke-width:2.3;}

/* FAB */
.fab{position:fixed;bottom:78px;left:18px;width:52px;height:52px;border-radius:16px;background:var(–accent);border:none;color:#fff;font-size:24px;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 18px rgba(45,106,79,.35);z-index:199;transition:.15s;}
.fab:active{transform:scale(.93);}

/* PAGES */
.page{display:none;padding:0 16px 8px;animation:fi .2s ease;}
.page.act{display:block;}
@keyframes fi{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}

/* HOME */
.greet{padding:18px 4px 0;}
.greet h2{font-size:19px;font-weight:700;}
.greet p{font-size:12px;color:var(–text2);margin-top:2px;}

.bal-hero{background:linear-gradient(135deg,#152D22 0%,#2D6A4F 100%);border-radius:22px;padding:22px;margin:14px 0;position:relative;overflow:hidden;box-shadow:0 6px 24px rgba(45,106,79,.22);}
.bal-hero::before{content:’’;position:absolute;top:-40px;right:-40px;width:120px;height:120px;border-radius:50%;background:rgba(255,255,255,.05);}
.bh-lbl{font-size:10px;color:rgba(255,255,255,.55);text-transform:uppercase;letter-spacing:.7px;font-weight:600;}
.bh-amt{font-family:‘DM Serif Display’,serif;font-size:36px;color:#fff;margin:4px 0 16px;letter-spacing:-1px;}
.bh-r{display:flex;gap:12px;}
.bh-s{flex:1;background:rgba(255,255,255,.1);border-radius:11px;padding:10px 12px;}
.bh-sl{font-size:9px;color:rgba(255,255,255,.55);text-transform:uppercase;letter-spacing:.4px;}
.bh-sv{font-size:14px;font-weight:700;color:#fff;margin-top:2px;}

.qcats{display:flex;gap:8px;overflow-x:auto;padding:2px 0 8px;scrollbar-width:none;margin-bottom:2px;}
.qcats::-webkit-scrollbar{display:none;}
.qc{display:flex;flex-direction:column;align-items:center;gap:5px;min-width:58px;padding:10px 6px;background:var(–card);border:1px solid var(–border);border-radius:14px;cursor:pointer;transition:.15s;box-shadow:var(–shadow);}
.qc:active{background:var(–accent-light);border-color:var(–accent);}
.qc-i{font-size:22px;}
.qc-l{font-size:9px;color:var(–text2);font-weight:600;white-space:nowrap;}

.shd{display:flex;align-items:center;justify-content:space-between;margin:18px 0 11px;}
.shd h3{font-size:14px;font-weight:700;}
.sa{font-size:12px;color:var(–accent);font-weight:600;background:none;border:none;cursor:pointer;}

.txi{display:flex;align-items:center;gap:11px;background:var(–card);border-radius:var(–radius-sm);padding:12px 13px;margin-bottom:8px;border:1px solid var(–border);box-shadow:var(–shadow);}
.tx-iw{width:40px;height:40px;border-radius:11px;display:flex;align-items:center;justify-content:center;font-size:19px;flex-shrink:0;}
.tx-m{flex:1;min-width:0;}
.tx-n{font-size:13px;font-weight:600;}
.tx-c{font-size:10px;color:var(–text2);margin-top:1px;}
.tx-r{text-align:left;}
.tx-a{font-size:14px;font-weight:700;font-family:‘DM Serif Display’,serif;}
.tx-d{font-size:10px;color:var(–text3);margin-top:1px;}
.tx-acts{display:flex;gap:5px;}
.txb{width:30px;height:30px;border-radius:8px;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:13px;}
.txb.d{background:var(–red-light);color:var(–red);}
.txb.e{background:var(–accent-light);color:var(–accent);}

.empty{text-align:center;padding:44px 20px;color:var(–text2);}
.empty-i{font-size:48px;margin-bottom:12px;}
.empty-t{font-size:14px;font-weight:500;}
.empty-s{font-size:12px;color:var(–text3);margin-top:4px;}

/* TX PAGE */
.phd{display:flex;align-items:center;justify-content:space-between;padding:18px 4px 14px;}
.phd h2{font-size:21px;font-weight:800;}
.sw{position:relative;margin-bottom:12px;}
.si{width:100%;background:var(–card);border:1.5px solid var(–border);border-radius:var(–radius-sm);padding:11px 15px 11px 38px;font-size:13px;color:var(–text);outline:none;transition:.2s;}
.si:focus{border-color:var(–accent);}
.si::placeholder{color:var(–text3);}
.sic{position:absolute;top:50%;left:13px;transform:translateY(-50%);color:var(–text3);font-size:14px;pointer-events:none;}

.ftabs{display:flex;gap:6px;margin-bottom:14px;overflow-x:auto;scrollbar-width:none;}
.ftabs::-webkit-scrollbar{display:none;}
.ft{padding:6px 14px;border-radius:20px;background:var(–card);border:1.5px solid var(–border);font-size:12px;font-weight:600;color:var(–text2);cursor:pointer;white-space:nowrap;transition:.15s;}
.ft.act{background:var(–accent);color:#fff;border-color:var(–accent);}

.sstrip{display:grid;grid-template-columns:repeat(4,1fr);gap:7px;margin-bottom:16px;}
.ssc{background:var(–card);border:1px solid var(–border);border-radius:11px;padding:10px 6px;text-align:center;box-shadow:var(–shadow);}
.ssl{font-size:9px;color:var(–text2);text-transform:uppercase;letter-spacing:.4px;font-weight:600;}
.ssv{font-size:12px;font-weight:700;margin-top:3px;font-family:‘DM Serif Display’,serif;}

.dlbl{font-size:10px;font-weight:600;color:var(–text2);display:flex;justify-content:space-between;padding:0 2px;margin:12px 0 7px;text-transform:uppercase;letter-spacing:.5px;}

/* STATS */
.pr{display:flex;align-items:center;gap:8px;margin-bottom:14px;}
.pb{background:var(–card);border:1px solid var(–border);border-radius:10px;width:36px;height:36px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;color:var(–text2);}
.pt{flex:1;text-align:center;font-size:14px;font-weight:700;}

.krow{display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-bottom:14px;}
.kc{background:var(–card);border:1px solid var(–border);border-radius:var(–radius);padding:14px;box-shadow:var(–shadow);}
.kl{font-size:9px;font-weight:700;color:var(–text2);text-transform:uppercase;letter-spacing:.5px;margin-bottom:5px;}
.kv{font-family:‘DM Serif Display’,serif;font-size:24px;}

.cc{background:var(–card);border:1px solid var(–border);border-radius:var(–radius);padding:16px;margin-bottom:12px;box-shadow:var(–shadow);}
.ch{font-size:12px;font-weight:700;margin-bottom:12px;}

.bc{display:flex;align-items:flex-end;gap:7px;height:88px;}
.bcol{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;height:100%;justify-content:flex-end;}
.bar{width:100%;border-radius:5px 5px 0 0;min-height:4px;transition:height .5s cubic-bezier(.4,0,.2,1);}
.blbl{font-size:9px;color:var(–text2);font-weight:600;}

.dw{display:flex;align-items:center;gap:18px;}
.dsv{width:108px;height:108px;flex-shrink:0;}
.dl{flex:1;display:flex;flex-direction:column;gap:8px;}
.lr{display:flex;align-items:center;gap:7px;}
.ldot{width:9px;height:9px;border-radius:3px;flex-shrink:0;}
.ln{flex:1;font-size:12px;font-weight:500;}
.lp{font-size:12px;font-weight:700;font-family:‘DM Serif Display’,serif;}

.csr{display:flex;align-items:center;gap:9px;margin-bottom:11px;}
.csi{width:33px;height:33px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;}
.csif{flex:1;}
.csn{font-size:13px;font-weight:600;}
.csbg{height:4px;background:var(–bg3);border-radius:2px;margin-top:4px;overflow:hidden;}
.csbf{height:100%;border-radius:2px;transition:width .5s;}
.csa{font-size:13px;font-weight:700;font-family:‘DM Serif Display’,serif;}

/* SETTINGS */
.pcard{background:var(–card);border:1px solid var(–border);border-radius:var(–radius);padding:18px 15px;margin-bottom:22px;display:flex;align-items:center;gap:13px;box-shadow:var(–shadow);}
.pav{width:50px;height:50px;border-radius:14px;background:var(–accent);display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0;}
.pn{font-size:16px;font-weight:700;}
.pe{font-size:11px;color:var(–text2);margin-top:2px;}

.ssec{margin-bottom:22px;}
.ssect{font-size:10px;font-weight:700;color:var(–text3);text-transform:uppercase;letter-spacing:1px;margin-bottom:9px;padding:0 4px;}
.sg{background:var(–card);border:1px solid var(–border);border-radius:var(–radius);overflow:hidden;box-shadow:var(–shadow);}
.sr{display:flex;align-items:center;gap:11px;padding:13px 15px;cursor:pointer;transition:.15s;border-bottom:1px solid var(–border);}
.sr:last-child{border-bottom:none;}
.sr:active{background:var(–bg3);}
.si2{width:34px;height:34px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:17px;flex-shrink:0;}
.sinf{flex:1;}
.slbl{font-size:13px;font-weight:600;}
.ssub{font-size:11px;color:var(–text2);margin-top:1px;}
.sval{font-size:12px;font-weight:600;color:var(–accent);}
.sarw{color:var(–text3);font-size:13px;margin-left:4px;}

.lout{width:100%;background:var(–red-light);color:var(–red);border:none;border-radius:var(–radius-sm);padding:13px;font-size:14px;font-weight:700;cursor:pointer;margin-top:4px;}

/* MODALS */
.ov{display:none;position:fixed;inset:0;background:rgba(26,24,20,.4);z-index:500;align-items:flex-end;justify-content:center;backdrop-filter:blur(4px);}
.ov.open{display:flex;}
.modal{background:var(–card);width:100%;max-width:430px;border-radius:26px 26px 0 0;padding:18px 20px 36px;max-height:90vh;overflow-y:auto;animation:su .25s cubic-bezier(.4,0,.2,1);box-shadow:0 -4px 32px rgba(26,24,20,.1);}
@keyframes su{from{transform:translateY(100%)}to{transform:translateY(0)}}
.mh{width:36px;height:4px;background:var(–border2);border-radius:2px;margin:0 auto 16px;}
.mt{font-size:17px;font-weight:800;margin-bottom:16px;}

.trow{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-bottom:16px;}
.tbtn{padding:11px;border-radius:var(–radius-sm);border:2px solid var(–border);background:transparent;font-size:13px;font-weight:700;cursor:pointer;transition:.15s;color:var(–text2);}
.tbtn.se{border-color:var(–red);color:var(–red);background:var(–red-light);}
.tbtn.si{border-color:var(–green);color:var(–green);background:var(–green-light);}

.cgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:7px;margin-bottom:4px;}
.co{display:flex;flex-direction:column;align-items:center;gap:4px;padding:9px 3px;border-radius:11px;border:2px solid var(–border);background:transparent;cursor:pointer;transition:.15s;}
.co span:last-child{font-size:9px;color:var(–text2);font-weight:600;}
.co.sel{border-color:var(–accent);background:var(–accent-light);}
.co.sel span:last-child{color:var(–accent);}

.sbtn{width:100%;padding:14px;border-radius:var(–radius-sm);background:var(–accent);color:#fff;border:none;font-size:15px;font-weight:700;cursor:pointer;margin-top:8px;}
.sbtn:active{opacity:.88;}
.cbtn{width:100%;padding:11px;background:none;border:none;color:var(–text2);font-size:13px;font-weight:600;cursor:pointer;margin-top:5px;}

.ep{display:flex;gap:7px;flex-wrap:wrap;margin-bottom:5px;}
.eo{width:40px;height:40px;border-radius:10px;background:var(–bg3);border:2px solid var(–border);cursor:pointer;font-size:19px;display:flex;align-items:center;justify-content:center;transition:.15s;}
.eo.sel{border-color:var(–accent);background:var(–accent-light);}
.cp{display:flex;gap:7px;flex-wrap:wrap;margin-bottom:4px;}
.cd{width:28px;height:28px;border-radius:50%;border:3px solid transparent;cursor:pointer;transition:.15s;}
.cd.sel{border-color:var(–text);transform:scale(1.15);}

.lo{display:flex;align-items:center;gap:12px;padding:13px 15px;cursor:pointer;transition:.15s;border-bottom:1px solid var(–border);}
.lo:last-child{border-bottom:none;}
.lo:active{background:var(–bg3);}
.lof{font-size:22px;}
.lon{flex:1;font-size:14px;font-weight:600;}
.lonv{font-size:11px;color:var(–text2);}
.loc{color:var(–accent);font-weight:700;}

/* LEGAL */
.lb{display:flex;align-items:center;gap:6px;color:var(–accent);background:none;border:none;font-size:13px;font-weight:600;cursor:pointer;padding:15px 0 8px;}
.lbody h3{font-size:15px;font-weight:700;color:var(–accent);margin:16px 0 7px;}
.lbody p{font-size:13px;color:var(–text2);line-height:1.75;}

/* TOAST */
.toast{position:fixed;bottom:92px;left:50%;transform:translateX(-50%);background:var(–text);color:#fff;padding:9px 22px;border-radius:20px;font-size:13px;font-weight:600;z-index:1000;opacity:0;transition:opacity .25s;pointer-events:none;white-space:nowrap;box-shadow:var(–shadow-md);}
.toast.show{opacity:1;}
</style>

</head>
<body>

<!-- LOGIN -->

<div class="screen show" id="sl">
<div class="auth-wrap">
  <div class="auth-hero">
    <div class="auth-dots"></div>
    <div class="auth-logo">Spend<em>X</em></div>
    <div class="auth-tag" data-i18n="tagline">تتبع مصاريفك بذكاء</div>
  </div>
  <div class="auth-body">
    <div class="auth-h" data-i18n="welcome">مرحباً بعودتك</div>
    <div class="auth-sub" data-i18n="loginSub">سجّل دخولك لمتابعة ميزانيتك</div>
    <div class="ff"><label class="fl" data-i18n="email">البريد الإلكتروني</label><input class="fi" id="le" type="email" placeholder="you@example.com" dir="ltr"></div>
    <div class="ff"><label class="fl" data-i18n="password">كلمة المرور</label><input class="fi" id="lp" type="password" placeholder="••••••••" dir="ltr"></div>
    <button class="btn-p" onclick="doLogin()" data-i18n="login">تسجيل الدخول</button>
    <div class="divider" data-i18n="or">أو</div>
    <button class="btn-o" onclick="SS('ss')" data-i18n="createAccount">إنشاء حساب جديد</button>
    <div class="auth-sw"><span data-i18n="noAccount">ليس لديك حساب؟</span> <a onclick="SS('ss')" data-i18n="signupLink">سجّل مجاناً</a></div>
  </div>
</div>
</div>

<!-- SIGNUP -->

<div class="screen" id="ss">
<div class="auth-wrap">
  <div class="auth-hero">
    <div class="auth-dots"></div>
    <div class="auth-logo">Spend<em>X</em></div>
    <div class="auth-tag" data-i18n="tagline">تتبع مصاريفك بذكاء</div>
  </div>
  <div class="auth-body">
    <div class="auth-h" data-i18n="createTitle">إنشاء حساب</div>
    <div class="auth-sub" data-i18n="createSub">انضم وابدأ التحكم في ميزانيتك</div>
    <div class="ff"><label class="fl" data-i18n="fullName">الاسم الكامل</label><input class="fi" id="sn" type="text" placeholder="نورالدين"></div>
    <div class="ff">
      <label class="fl" data-i18n="avatar">الصورة الشخصية</label>
      <div class="ava-row" id="av-row">
        <div class="ava-o sel" onclick="pickAva(this,'🦁')">🦁</div>
        <div class="ava-o" onclick="pickAva(this,'🐯')">🐯</div>
        <div class="ava-o" onclick="pickAva(this,'🦊')">🦊</div>
        <div class="ava-o" onclick="pickAva(this,'🐺')">🐺</div>
        <div class="ava-o" onclick="pickAva(this,'🦅')">🦅</div>
        <div class="ava-o" onclick="pickAva(this,'🐉')">🐉</div>
      </div>
    </div>
    <div class="ff"><label class="fl" data-i18n="email">البريد الإلكتروني</label><input class="fi" id="se" type="email" placeholder="you@example.com" dir="ltr"></div>
    <div class="ff"><label class="fl" data-i18n="password">كلمة المرور</label><input class="fi" id="sp" type="password" placeholder="••••••••" dir="ltr"></div>
    <button class="btn-p" onclick="doSignup()" data-i18n="signup">إنشاء الحساب</button>
    <div class="auth-sw"><span data-i18n="haveAccount">لديك حساب؟</span> <a onclick="SS('sl')" data-i18n="loginLink">تسجيل الدخول</a></div>
  </div>
</div>
</div>

<!-- APP -->

<div class="screen" id="sa">
  <div class="hdr">
    <div class="hdr-logo">SpendX</div>
    <div class="hdr-r">
      <div class="ico-btn" onclick="OM('ml')">🌐</div>
      <div class="u-ava" id="ha">🦁</div>
    </div>
  </div>

  <!-- HOME -->

  <div class="page act" id="ph">
    <div class="greet">
      <h2 id="gh"></h2>
      <p id="gs"></p>
    </div>
    <div class="bal-hero">
      <div class="bh-lbl" data-i18n="totalBalance">الرصيد الإجمالي</div>
      <div class="bh-amt" id="hbal">MAD 0</div>
      <div class="bh-r">
        <div class="bh-s"><div class="bh-sl" data-i18n="income">دخل</div><div class="bh-sv" id="hinc">0</div></div>
        <div class="bh-s"><div class="bh-sl" data-i18n="expenses">مصاريف</div><div class="bh-sv" id="hexp">0</div></div>
        <div class="bh-s"><div class="bh-sl" data-i18n="savingRate">توفير</div><div class="bh-sv" id="hsav">0%</div></div>
      </div>
    </div>
    <div class="shd"><h3 data-i18n="quickAdd">إضافة سريعة</h3></div>
    <div class="qcats" id="qc"></div>
    <div class="shd"><h3 data-i18n="recentTx">آخر المعاملات</h3><button class="sa" onclick="GP('t')" data-i18n="seeAll">عرض الكل ›</button></div>
    <div id="hl"></div>
  </div>

  <!-- TRANSACTIONS -->

  <div class="page" id="pt">
    <div class="phd"><h2 data-i18n="transactions">المعاملات</h2></div>
    <div class="sw"><span class="sic">🔍</span><input class="si" id="si" oninput="rTx()" data-i18n-placeholder="search"></div>
    <div class="ftabs">
      <div class="ft act" onclick="SF('all',this)" data-i18n="all">الكل</div>
      <div class="ft" onclick="SF('expense',this)" data-i18n="expense">مصاريف</div>
      <div class="ft" onclick="SF('income',this)" data-i18n="income">دخل</div>
    </div>
    <div class="sstrip">
      <div class="ssc"><div class="ssl" data-i18n="expenses">مصاريف</div><div class="ssv" style="color:var(--red)" id="sse">0</div></div>
      <div class="ssc"><div class="ssl" data-i18n="income">دخل</div><div class="ssv" style="color:var(--green)" id="ssi">0</div></div>
      <div class="ssc"><div class="ssl" data-i18n="total">إجمالي</div><div class="ssv" id="sst">0</div></div>
      <div class="ssc"><div class="ssl" data-i18n="balance">رصيد</div><div class="ssv" id="ssb">0</div></div>
    </div>
    <div id="txl"></div>
  </div>

  <!-- STATS -->

  <div class="page" id="pst">
    <div class="phd"><h2 data-i18n="statistics">الإحصائيات</h2></div>
    <div class="pr">
      <button class="pb" onclick="CP(1)">›</button>
      <div class="pt" id="pl"></div>
      <button class="pb" onclick="CP(-1)">‹</button>
    </div>
    <div class="krow">
      <div class="kc"><div class="kl" data-i18n="income">دخل</div><div class="kv" style="color:var(--green)" id="ki">0</div></div>
      <div class="kc"><div class="kl" data-i18n="expenses">مصاريف</div><div class="kv" style="color:var(--red)" id="ke">0</div></div>
      <div class="kc"><div class="kl" data-i18n="savingRate">توفير</div><div class="kv" style="color:var(--accent)" id="ks">0%</div></div>
      <div class="kc"><div class="kl" data-i18n="avgPerDay">متوسط/يوم</div><div class="kv" style="color:var(--amber)" id="ka">0</div></div>
    </div>
    <div class="cc"><div class="ch" data-i18n="weeklySpending">الإنفاق الأسبوعي</div><div class="bc" id="bch"></div></div>
    <div class="cc">
      <div class="ch" data-i18n="expenseByCategory">توزيع المصاريف</div>
      <div class="dw">
        <svg class="dsv" viewBox="0 0 100 100" id="dsv"><circle cx="50" cy="50" r="38" fill="none" stroke="#E8E4DC" stroke-width="16"/></svg>
        <div class="dl" id="dleg"></div>
      </div>
    </div>
    <div class="cc"><div class="ch" data-i18n="categoryBreakdown">التفاصيل حسب الفئة</div><div id="cbk"></div></div>
  </div>

  <!-- SETTINGS -->

  <div class="page" id="pse">
    <div class="phd"><h2 data-i18n="settings">الإعدادات</h2></div>
    <div class="pcard">
      <div class="pav" id="pav">🦁</div>
      <div><div class="pn" id="pn">نورالدين</div><div class="pe" id="pem">you@example.com</div></div>
    </div>
    <div class="ssec">
      <div class="ssect" data-i18n="preferences">التفضيلات</div>
      <div class="sg">
        <div class="sr" onclick="OM('mc')"><div class="si2" style="background:var(--accent-light)">💱</div><div class="sinf"><div class="slbl" data-i18n="currency">العملة</div><div class="ssub" id="csub">MAD</div></div><div><span class="sval" id="ccd">MAD</span><span class="sarw">›</span></div></div>
        <div class="sr" onclick="OM('ml')"><div class="si2" style="background:var(--blue-light)">🌐</div><div class="sinf"><div class="slbl" data-i18n="language">اللغة</div><div class="ssub" id="lsub">العربية</div></div><div><span class="sval" id="lcd">AR</span><span class="sarw">›</span></div></div>
      </div>
    </div>
    <div class="ssec">
      <div class="ssect" data-i18n="categories">الفئات</div>
      <div class="sg">
        <div class="sr" onclick="OCM()"><div class="si2" style="background:var(--amber-light)">🗂️</div><div class="sinf"><div class="slbl" data-i18n="manageCategories">إدارة الفئات</div><div class="ssub" id="ccs">8 فئات</div></div><span class="sarw">›</span></div>
      </div>
    </div>
    <div class="ssec">
      <div class="ssect" data-i18n="data">البيانات</div>
      <div class="sg">
        <div class="sr" onclick="expD()"><div class="si2" style="background:var(--green-light)">📤</div><div class="sinf"><div class="slbl" data-i18n="exportData">تصدير البيانات</div><div class="ssub">JSON</div></div><span class="sarw">›</span></div>
        <div class="sr" onclick="clrD()"><div class="si2" style="background:var(--red-light)">🗑️</div><div class="sinf"><div class="slbl" style="color:var(--red)" data-i18n="clearData">حذف كل البيانات</div><div class="ssub" data-i18n="clearSub">لا يمكن التراجع</div></div><span class="sarw">›</span></div>
      </div>
    </div>
    <div class="ssec">
      <div class="ssect" data-i18n="legal">قانوني</div>
      <div class="sg">
        <div class="sr" onclick="SL('privacy')"><div class="si2" style="background:var(--blue-light)">🔒</div><div class="sinf"><div class="slbl" data-i18n="privacy">سياسة الخصوصية</div><div class="ssub" data-i18n="privacySub">كيف نحمي بياناتك</div></div><span class="sarw">›</span></div>
        <div class="sr" onclick="SL('terms')"><div class="si2" style="background:var(--amber-light)">📋</div><div class="sinf"><div class="slbl" data-i18n="terms">شروط الخدمة</div><div class="ssub" data-i18n="termsSub">القواعد والشروط</div></div><span class="sarw">›</span></div>
      </div>
    </div>
    <button class="lout" onclick="logout()" data-i18n="logout">تسجيل الخروج</button>
    <div style="text-align:center;color:var(--text3);font-size:11px;margin-top:18px;">SpendX v3.0</div>
  </div>

  <!-- LEGAL -->

  <div class="page" id="plg">
    <button class="lb" onclick="GP('settings')">‹ <span data-i18n="back">رجوع</span></button>
    <div class="lbody" id="lbody"></div>
  </div>

  <div class="bnav">
    <button class="ni act" id="nh" onclick="GP('home')"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg><span data-i18n="home">الرئيسية</span></button>
    <button class="ni" id="nt" onclick="GP('t')"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg><span data-i18n="transactions">المعاملات</span></button>
    <button class="ni" id="nst" onclick="GP('stats')"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg><span data-i18n="statistics">الإحصائيات</span></button>
    <button class="ni" id="nse" onclick="GP('settings')"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg><span data-i18n="settings">الإعدادات</span></button>
  </div>
  <button class="fab" onclick="OA()">＋</button>
</div>

<!-- MODALS -->

<div class="ov" id="ma"><div class="modal">
  <div class="mh"></div>
  <div class="mt" id="atit" data-i18n="addTransaction">إضافة معاملة</div>
  <div class="trow"><button class="tbtn se" id="tbe" onclick="ST('expense')" data-i18n="expense">مصروف</button><button class="tbtn" id="tbi" onclick="ST('income')" data-i18n="income">دخل</button></div>
  <div class="ff"><label class="fl" data-i18n="amount">المبلغ</label><input class="fi" id="fa" type="number" placeholder="0.00" dir="ltr"></div>
  <div class="ff"><label class="fl" data-i18n="description">الوصف</label><input class="fi" id="fd" type="text"></div>
  <div class="ff"><label class="fl" data-i18n="category">الفئة</label><div class="cgrid" id="fcg"></div></div>
  <div class="ff"><label class="fl" data-i18n="date">التاريخ</label><input class="fi" id="fdt" type="date" dir="ltr"></div>
  <button class="sbtn" onclick="saveTx()" data-i18n="save">حفظ</button>
  <button class="cbtn" onclick="CM('ma')" data-i18n="cancel">إلغاء</button>
</div></div>

<div class="ov" id="ml"><div class="modal">
  <div class="mh"></div>
  <div class="mt" data-i18n="language">اللغة</div>
  <div style="background:var(--bg3);border-radius:var(--radius);overflow:hidden;" id="ll"></div>
  <button class="cbtn" onclick="CM('ml')" data-i18n="cancel">إلغاء</button>
</div></div>

<div class="ov" id="mc"><div class="modal">
  <div class="mh"></div>
  <div class="mt" data-i18n="currency">العملة</div>
  <div style="background:var(--bg3);border-radius:var(--radius);overflow:hidden;" id="cl"></div>
  <button class="cbtn" onclick="CM('mc')" data-i18n="cancel">إلغاء</button>
</div></div>

<div class="ov" id="mcm"><div class="modal">
  <div class="mh"></div>
  <div class="mt" data-i18n="manageCategories">إدارة الفئات</div>
  <div id="cml"></div>
  <button class="sbtn" onclick="OAC()" data-i18n="addCategory">＋ إضافة فئة</button>
  <button class="cbtn" onclick="CM('mcm')" data-i18n="close">إغلاق</button>
</div></div>

<div class="ov" id="mac"><div class="modal">
  <div class="mh"></div>
  <div class="mt" data-i18n="addCategory">إضافة فئة</div>
  <div class="ff"><label class="fl" data-i18n="categoryName">الاسم</label><input class="fi" id="ncn" type="text"></div>
  <div class="ff"><label class="fl" data-i18n="icon">الرمز</label><div class="ep" id="ep"></div></div>
  <div class="ff"><label class="fl" data-i18n="color">اللون</label><div class="cp" id="cpp"></div></div>
  <button class="sbtn" onclick="saveNC()" data-i18n="save">حفظ</button>
  <button class="cbtn" onclick="CM('mac')" data-i18n="cancel">إلغاء</button>
</div></div>

<div class="toast" id="toast"></div>

<script>
const EMOJIS=['🍕','🍔','☕','🛒','🚗','🏠','💊','🛍️','🎮','📚','✈️','💪','🎵','💡','🐾','🌿','🎬','👗','💻','📱','🎁','🏖️','🚌','⚽','🍜'];
const COLORS=['#C1121F','#B5541A','#2D6A4F','#1B4F72','#6B3FA0','#7A5230','#C05780','#2E86AB','#4A7C59','#B8860B'];
const LANGS=[{code:'ar',name:'العربية',nat:'Arabic',flag:'🇲🇦',dir:'rtl'},{code:'fr',name:'Français',nat:'French',flag:'🇫🇷',dir:'ltr'},{code:'en',name:'English',nat:'English',flag:'🇬🇧',dir:'ltr'},{code:'es',name:'Español',nat:'Spanish',flag:'🇪🇸',dir:'ltr'},{code:'de',name:'Deutsch',nat:'German',flag:'🇩🇪',dir:'ltr'}];
const CURRS=[{code:'MAD',sym:'MAD',flag:'🇲🇦',n:{ar:'درهم مغربي',fr:'Dirham Marocain',en:'Moroccan Dirham',es:'Dírham',de:'Marokkanischer Dirham'}},{code:'EUR',sym:'€',flag:'🇪🇺',n:{ar:'يورو',fr:'Euro',en:'Euro',es:'Euro',de:'Euro'}},{code:'USD',sym:'$',flag:'🇺🇸',n:{ar:'دولار',fr:'Dollar',en:'US Dollar',es:'Dólar',de:'Dollar'}},{code:'GBP',sym:'£',flag:'🇬🇧',n:{ar:'جنيه',fr:'Livre',en:'Pound',es:'Libra',de:'Pfund'}},{code:'SAR',sym:'ر.س',flag:'🇸🇦',n:{ar:'ريال سعودي',fr:'Riyal',en:'Saudi Riyal',es:'Riyal',de:'Riyal'}},{code:'AED',sym:'د.إ',flag:'🇦🇪',n:{ar:'درهم إماراتي',fr:'Dirham EAU',en:'UAE Dirham',es:'Dírham EAU',de:'Dirham'}}];

let G={user:null,txs:[],cats:[{id:'food',nm:{ar:'طعام',fr:'Alimentation',en:'Food',es:'Comida',de:'Essen'},i:'🛒',c:'#C1121F'},{id:'coffee',nm:{ar:'قهوة',fr:'Café',en:'Coffee',es:'Café',de:'Kaffee'},i:'☕',c:'#7A5230'},{id:'transport',nm:{ar:'مواصلات',fr:'Transport',en:'Transport',es:'Transporte',de:'Transport'},i:'🚗',c:'#1B4F72'},{id:'health',nm:{ar:'صحة',fr:'Santé',en:'Health',es:'Salud',de:'Gesundheit'},i:'💊',c:'#2D6A4F'},{id:'shopping',nm:{ar:'تسوق',fr:'Shopping',en:'Shopping',es:'Compras',de:'Einkaufen'},i:'🛍️',c:'#6B3FA0'},{id:'bills',nm:{ar:'فواتير',fr:'Factures',en:'Bills',es:'Facturas',de:'Rechnungen'},i:'📄',c:'#B5541A'},{id:'fun',nm:{ar:'ترفيه',fr:'Loisirs',en:'Entertainment',es:'Entretenimiento',de:'Unterhaltung'},i:'🎮',c:'#C05780'},{id:'salary',nm:{ar:'راتب',fr:'Salaire',en:'Salary',es:'Salario',de:'Gehalt'},i:'💼',c:'#2E86AB'}],cur:{code:'MAD',sym:'MAD',flag:'🇲🇦',n:{ar:'درهم مغربي',fr:'Dirham Marocain',en:'Moroccan Dirham',es:'Dírham',de:'Marokkanischer Dirham'}},lang:'ar',sm:new Date().getMonth(),sy:new Date().getFullYear(),eid:null,stype:'expense',scat:null,semoji:'📦',scolor:'#C1121F',filt:'all'};

const TR={ar:{home:'الرئيسية',transactions:'المعاملات',statistics:'الإحصائيات',settings:'الإعدادات',income:'الدخل',expenses:'المصاريف',balance:'الرصيد',savingRate:'معدل التوفير',totalBalance:'الرصيد الإجمالي',recentTx:'آخر المعاملات',seeAll:'عرض الكل ›',noTx:'لا توجد معاملات بعد',addTransaction:'إضافة معاملة',expense:'مصروف',amount:'المبلغ',description:'الوصف',category:'الفئة',date:'التاريخ',save:'حفظ',cancel:'إلغاء',search:'بحث...',total:'الإجمالي',all:'الكل',avgPerDay:'متوسط/يوم',weeklySpending:'الإنفاق الأسبوعي',expenseByCategory:'توزيع المصاريف',categoryBreakdown:'التفاصيل حسب الفئة',preferences:'التفضيلات',currency:'العملة',language:'اللغة',categories:'الفئات',manageCategories:'إدارة الفئات',data:'البيانات',exportData:'تصدير البيانات',clearData:'حذف كل البيانات',clearSub:'لا يمكن التراجع',legal:'قانوني',privacy:'سياسة الخصوصية',privacySub:'كيف نحمي بياناتك',terms:'شروط الخدمة',termsSub:'القواعد والشروط',back:'رجوع',addCategory:'إضافة فئة',categoryName:'الاسم',icon:'الرمز',color:'اللون',close:'إغلاق',editTransaction:'تعديل معاملة',quickAdd:'إضافة سريعة',logout:'تسجيل الخروج',tagline:'تتبع مصاريفك بذكاء',welcome:'مرحباً بعودتك',loginSub:'سجّل دخولك لمتابعة ميزانيتك',email:'البريد الإلكتروني',password:'كلمة المرور',login:'تسجيل الدخول',or:'أو',createAccount:'إنشاء حساب جديد',noAccount:'ليس لديك حساب؟',signupLink:'سجّل مجاناً',createTitle:'إنشاء حساب',createSub:'انضم وابدأ التحكم في ميزانيتك',fullName:'الاسم الكامل',avatar:'الصورة الشخصية',signup:'إنشاء الحساب',haveAccount:'لديك حساب؟',loginLink:'تسجيل الدخول',gm:'صباح الخير',ga:'مساء الخير',ge:'مساء النور',months:['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'],today:'اليوم',yesterday:'أمس',saved:'تم الحفظ ✓',deleted:'تم الحذف ✓',catAdded:'تمت الإضافة ✓',exported:'تم التصدير ✓',cleared:'تم الحذف',confirmClear:'هل أنت متأكد من حذف كل البيانات؟'},fr:{home:'Accueil',transactions:'Transactions',statistics:'Statistiques',settings:'Paramètres',income:'Revenus',expenses:'Dépenses',balance:'Solde',savingRate:"Épargne",totalBalance:'Solde total',recentTx:'Dernières transactions',seeAll:'Voir tout ›',noTx:'Aucune transaction',addTransaction:'Ajouter une transaction',expense:'Dépense',amount:'Montant',description:'Description',category:'Catégorie',date:'Date',save:'Enregistrer',cancel:'Annuler',search:'Rechercher...',total:'Total',all:'Tout',avgPerDay:'Moy./jour',weeklySpending:'Dépenses hebdomadaires',expenseByCategory:'Répartition dépenses',categoryBreakdown:'Détails par catégorie',preferences:'Préférences',currency:'Devise',language:'Langue',categories:'Catégories',manageCategories:'Gérer catégories',data:'Données',exportData:'Exporter',clearData:'Supprimer tout',clearSub:'Irréversible',legal:'Légal',privacy:'Confidentialité',privacySub:'Comment on protège vos données',terms:"Conditions d'utilisation",termsSub:'Règles et conditions',back:'Retour',addCategory:'Ajouter catégorie',categoryName:'Nom',icon:'Icône',color:'Couleur',close:'Fermer',editTransaction:'Modifier',quickAdd:'Ajout rapide',logout:'Se déconnecter',tagline:'Gérez votre budget intelligemment',welcome:'Bon retour',loginSub:'Connectez-vous pour continuer',email:'Email',password:'Mot de passe',login:'Se connecter',or:'ou',createAccount:'Créer un compte',noAccount:'Pas de compte ?',signupLink:"S'inscrire",createTitle:'Créer un compte',createSub:'Rejoignez et maîtrisez votre budget',fullName:'Nom complet',avatar:'Avatar',signup:'Créer',haveAccount:'Déjà un compte ?',loginLink:'Se connecter',gm:'Bonjour',ga:'Bonsoir',ge:'Bonsoir',months:['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],today:"Aujourd'hui",yesterday:'Hier',saved:'Enregistré ✓',deleted:'Supprimé ✓',catAdded:'Ajouté ✓',exported:'Exporté ✓',cleared:'Supprimé',confirmClear:'Supprimer toutes les données ?'},en:{home:'Home',transactions:'Transactions',statistics:'Statistics',settings:'Settings',income:'Income',expenses:'Expenses',balance:'Balance',savingRate:'Saving Rate',totalBalance:'Total Balance',recentTx:'Recent Transactions',seeAll:'See all ›',noTx:'No transactions yet',addTransaction:'Add Transaction',expense:'Expense',amount:'Amount',description:'Description',category:'Category',date:'Date',save:'Save',cancel:'Cancel',search:'Search...',total:'Total',all:'All',avgPerDay:'Avg/day',weeklySpending:'Weekly Spending',expenseByCategory:'Expense Breakdown',categoryBreakdown:'Category Details',preferences:'Preferences',currency:'Currency',language:'Language',categories:'Categories',manageCategories:'Manage Categories',data:'Data',exportData:'Export Data',clearData:'Clear All Data',clearSub:'Cannot be undone',legal:'Legal',privacy:'Privacy Policy',privacySub:'How we protect your data',terms:'Terms of Service',termsSub:'Rules and conditions',back:'Back',addCategory:'Add Category',categoryName:'Name',icon:'Icon',color:'Color',close:'Close',editTransaction:'Edit Transaction',quickAdd:'Quick Add',logout:'Log Out',tagline:'Track your spending smartly',welcome:'Welcome back',loginSub:'Sign in to manage your budget',email:'Email',password:'Password',login:'Sign In',or:'or',createAccount:'Create Account',noAccount:"Don't have an account?",signupLink:'Sign up free',createTitle:'Create Account',createSub:'Join and take control of your budget',fullName:'Full Name',avatar:'Avatar',signup:'Create Account',haveAccount:'Already have an account?',loginLink:'Sign In',gm:'Good morning',ga:'Good afternoon',ge:'Good evening',months:['January','February','March','April','May','June','July','August','September','October','November','December'],today:'Today',yesterday:'Yesterday',saved:'Saved ✓',deleted:'Deleted ✓',catAdded:'Added ✓',exported:'Exported ✓',cleared:'Cleared',confirmClear:'Delete all data?'},es:{home:'Inicio',transactions:'Transacciones',statistics:'Estadísticas',settings:'Ajustes',income:'Ingresos',expenses:'Gastos',balance:'Saldo',savingRate:'Ahorro',totalBalance:'Saldo total',recentTx:'Últimas transacciones',seeAll:'Ver todo ›',noTx:'Sin transacciones',addTransaction:'Añadir transacción',expense:'Gasto',amount:'Importe',description:'Descripción',category:'Categoría',date:'Fecha',save:'Guardar',cancel:'Cancelar',search:'Buscar...',total:'Total',all:'Todo',avgPerDay:'Media/día',weeklySpending:'Gastos semanales',expenseByCategory:'Distribución gastos',categoryBreakdown:'Por categoría',preferences:'Preferencias',currency:'Divisa',language:'Idioma',categories:'Categorías',manageCategories:'Gestionar categorías',data:'Datos',exportData:'Exportar',clearData:'Borrar todo',clearSub:'Irreversible',legal:'Legal',privacy:'Privacidad',privacySub:'Cómo protegemos tus datos',terms:'Términos',termsSub:'Reglas',back:'Volver',addCategory:'Añadir categoría',categoryName:'Nombre',icon:'Icono',color:'Color',close:'Cerrar',editTransaction:'Editar',quickAdd:'Añadir rápido',logout:'Cerrar sesión',tagline:'Controla tus gastos',welcome:'Bienvenido',loginSub:'Inicia sesión',email:'Email',password:'Contraseña',login:'Iniciar sesión',or:'o',createAccount:'Crear cuenta',noAccount:'¿Sin cuenta?',signupLink:'Regístrate',createTitle:'Crear cuenta',createSub:'Únete y controla tu presupuesto',fullName:'Nombre completo',avatar:'Avatar',signup:'Crear cuenta',haveAccount:'¿Ya tienes cuenta?',loginLink:'Iniciar sesión',gm:'Buenos días',ga:'Buenas tardes',ge:'Buenas noches',months:['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],today:'Hoy',yesterday:'Ayer',saved:'Guardado ✓',deleted:'Eliminado ✓',catAdded:'Añadido ✓',exported:'Exportado ✓',cleared:'Eliminado',confirmClear:'¿Eliminar todos los datos?'},de:{home:'Startseite',transactions:'Transaktionen',statistics:'Statistiken',settings:'Einstellungen',income:'Einnahmen',expenses:'Ausgaben',balance:'Kontostand',savingRate:'Sparquote',totalBalance:'Gesamtsaldo',recentTx:'Letzte Transaktionen',seeAll:'Alle ›',noTx:'Keine Transaktionen',addTransaction:'Transaktion hinzufügen',expense:'Ausgabe',amount:'Betrag',description:'Beschreibung',category:'Kategorie',date:'Datum',save:'Speichern',cancel:'Abbrechen',search:'Suchen...',total:'Gesamt',all:'Alle',avgPerDay:'Ø/Tag',weeklySpending:'Wöchentliche Ausgaben',expenseByCategory:'Ausgabenverteilung',categoryBreakdown:'Kategoriedetails',preferences:'Einstellungen',currency:'Währung',language:'Sprache',categories:'Kategorien',manageCategories:'Kategorien',data:'Daten',exportData:'Exportieren',clearData:'Alles löschen',clearSub:'Nicht rückgängig',legal:'Rechtliches',privacy:'Datenschutz',privacySub:'Datenschutzrichtlinie',terms:'Nutzungsbedingungen',termsSub:'Regeln',back:'Zurück',addCategory:'Kategorie',categoryName:'Name',icon:'Symbol',color:'Farbe',close:'Schließen',editTransaction:'Bearbeiten',quickAdd:'Schnell',logout:'Abmelden',tagline:'Budget intelligent verwalten',welcome:'Willkommen zurück',loginSub:'Anmelden um fortzufahren',email:'E-Mail',password:'Passwort',login:'Anmelden',or:'oder',createAccount:'Konto erstellen',noAccount:'Kein Konto?',signupLink:'Registrieren',createTitle:'Konto erstellen',createSub:'Budget kontrollieren',fullName:'Vollständiger Name',avatar:'Avatar',signup:'Erstellen',haveAccount:'Haben Sie ein Konto?',loginLink:'Anmelden',gm:'Guten Morgen',ga:'Guten Nachmittag',ge:'Guten Abend',months:['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],today:'Heute',yesterday:'Gestern',saved:'Gespeichert ✓',deleted:'Gelöscht ✓',catAdded:'Hinzugefügt ✓',exported:'Exportiert ✓',cleared:'Gelöscht',confirmClear:'Alle Daten löschen?'}};

function t(k){return(TR[G.lang]&&TR[G.lang][k])||TR.ar[k]||k;}
function cn(cat){return cat.nm[G.lang]||cat.nm.ar;}
function fmt(n){return `${G.cur.code} ${Math.abs(n).toFixed(0)}`;}

function save(){localStorage.setItem('sx4',JSON.stringify({txs:G.txs,cats:G.cats,cur:G.cur,lang:G.lang,user:G.user}));}
function load(){try{const d=JSON.parse(localStorage.getItem('sx4')||'{}');if(d.txs)G.txs=d.txs;if(d.cats)G.cats=d.cats;if(d.cur)G.cur=d.cur;if(d.lang)G.lang=d.lang;if(d.user)G.user=d.user;}catch(e){}}

function SS(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('show'));document.getElementById(id).classList.add('show');}

let selAva='🦁';
function pickAva(el,e){selAva=e;document.querySelectorAll('.ava-o').forEach(a=>a.classList.remove('sel'));el.classList.add('sel');}

function doLogin(){
  const em=document.getElementById('le').value.trim(),pw=document.getElementById('lp').value;
  if(!em||!pw){showToast('⚠️ '+(G.lang==='ar'?'أدخل بياناتك':'Fill in all fields'));return;}
  G.user={name:em.split('@')[0],email:em,ava:'🦁'};save();enterApp();
}
function doSignup(){
  const nm=document.getElementById('sn').value.trim(),em=document.getElementById('se').value.trim(),pw=document.getElementById('sp').value;
  if(!nm||!em||!pw){showToast('⚠️ '+(G.lang==='ar'?'أدخل جميع البيانات':'Fill all fields'));return;}
  G.user={name:nm,email:em,ava:selAva};save();enterApp();
}
function logout(){G.user=null;save();SS('sl');document.getElementById('le').value='';document.getElementById('lp').value='';}
function enterApp(){
  document.getElementById('ha').textContent=G.user.ava;
  document.getElementById('pav').textContent=G.user.ava;
  document.getElementById('pn').textContent=G.user.name;
  document.getElementById('pem').textContent=G.user.email;
  SS('sa');applyLang();rHome();
}

function GP(n){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('act'));
  document.querySelectorAll('.ni').forEach(ni=>ni.classList.remove('act'));
  const pmap={home:'ph',t:'pt',stats:'pst',settings:'pse',legal:'plg'};
  const nmap={home:'nh',t:'nt',stats:'nst',settings:'nse'};
  document.getElementById(pmap[n]||'ph').classList.add('act');
  if(nmap[n])document.getElementById(nmap[n]).classList.add('act');
  if(n==='home')rHome();
  if(n==='t')rTx();
  if(n==='stats'){G.sm=new Date().getMonth();G.sy=new Date().getFullYear();rStats();}
  if(n==='settings')rSett();
}

function applyLang(){
  const lg=LANGS.find(l=>l.code===G.lang)||LANGS[0];
  document.documentElement.lang=G.lang;document.documentElement.dir=lg.dir;
  document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=t(el.getAttribute('data-i18n')));
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>el.placeholder=t(el.getAttribute('data-i18n-placeholder')));
  const h=new Date().getHours(),gr=h<12?t('gm'):h<17?t('ga'):t('ge');
  if(document.getElementById('gh'))document.getElementById('gh').textContent=`${gr} ${G.user?.name||''} 👋`;
  if(document.getElementById('gs'))document.getElementById('gs').textContent=t('totalBalance')+' — '+t('months')[new Date().getMonth()];
  const ls=document.getElementById('lsub');if(ls)ls.textContent=lg.name;
  const lc=document.getElementById('lcd');if(lc)lc.textContent=G.lang.toUpperCase();
  const cs=document.getElementById('csub');if(cs)cs.textContent=G.cur.code+' — '+(G.cur.n[G.lang]||G.cur.n.en);
  const cc=document.getElementById('ccd');if(cc)cc.textContent=G.cur.code;
}

function mTxs(m,y){return G.txs.filter(tx=>{const d=new Date(tx.date);return d.getMonth()===m&&d.getFullYear()===y;});}
function rHome(){
  applyLang();
  const txs=mTxs(new Date().getMonth(),new Date().getFullYear());
  const inc=txs.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
  const exp=txs.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
  const bal=inc-exp,sv=inc>0?Math.round((inc-exp)/inc*100):0;
  document.getElementById('hbal').textContent=(bal>=0?'+':'-')+fmt(bal);
  document.getElementById('hinc').textContent='+'+fmt(inc);
  document.getElementById('hexp').textContent='-'+fmt(exp);
  document.getElementById('hsav').textContent=sv+'%';
  document.getElementById('qc').innerHTML=G.cats.slice(0,6).map(c=>`<div class="qc" onclick="OAQ('${c.id}')"><div class="qc-i">${c.i}</div><div class="qc-l">${cn(c).slice(0,7)}</div></div>`).join('');
  const r=[...G.txs].sort((a,b)=>new Date(b.date)-new Date(a.date)).slice(0,5);
  const hl=document.getElementById('hl');
  if(!r.length){hl.innerHTML=`<div class="empty"><div class="empty-i">💸</div><div class="empty-t">${t('noTx')}</div><div class="empty-s">${t('addTransaction')} +</div></div>`;return;}
  hl.innerHTML=r.map(tx=>txCard(tx,false)).join('');
}
function OAQ(cid){OA();setTimeout(()=>selCat(cid),80);}

function txCard(tx,acts=true){
  const cat=G.cats.find(c=>c.id===tx.category)||{i:'💰',c:'#2D6A4F',nm:{ar:tx.category||''}};
  const isE=tx.type==='expense';
  const ab=acts?`<div class="tx-acts"><button class="txb d" onclick="delTx('${tx.id}')">🗑</button><button class="txb e" onclick="edTx('${tx.id}')">✏️</button></div>`:'';
  return `<div class="txi"><div class="tx-iw" style="background:${cat.c}16">${cat.i}</div><div class="tx-m"><div class="tx-n">${tx.desc||cn(cat)}</div><div class="tx-c">${cn(cat)}</div></div><div class="tx-r"><div class="tx-a" style="color:${isE?'var(--red)':'var(--green)'}">${isE?'−':'+'}${fmt(tx.amount)}</div><div class="tx-d">${tx.date}</div></div>${ab}</div>`;
}

function SF(f,el){G.filt=f;document.querySelectorAll('.ft').forEach(t=>t.classList.remove('act'));el.classList.add('act');rTx();}
function rTx(){
  const q=(document.getElementById('si')?.value||'').toLowerCase();
  let txs=[...G.txs];
  if(G.filt!=='all')txs=txs.filter(t=>t.type===G.filt);
  if(q)txs=txs.filter(tx=>(tx.desc||'').toLowerCase().includes(q));
  txs.sort((a,b)=>new Date(b.date)-new Date(a.date));
  const inc=txs.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
  const exp=txs.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
  const bal=inc-exp;
  document.getElementById('sse').textContent='-'+fmt(exp);
  document.getElementById('ssi').textContent='+'+fmt(inc);
  document.getElementById('sst').textContent=txs.length;
  const sb=document.getElementById('ssb');sb.textContent=(bal>=0?'+':'-')+fmt(bal);sb.style.color=bal>=0?'var(--green)':'var(--red)';
  const list=document.getElementById('txl');
  if(!txs.length){list.innerHTML=`<div class="empty"><div class="empty-i">🔍</div><div class="empty-t">${t('noTx')}</div></div>`;return;}
  const grps={};txs.forEach(tx=>{if(!grps[tx.date])grps[tx.date]=[];grps[tx.date].push(tx);});
  let html='';
  Object.keys(grps).sort((a,b)=>b.localeCompare(a)).forEach(date=>{
    const lbl=dlbl(date),de=grps[date].filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
    html+=`<div class="dlbl"><span>${lbl}</span><span style="color:var(--red)">−${fmt(de)}</span></div>`;
    html+=grps[date].map(tx=>txCard(tx,true)).join('');
  });
  list.innerHTML=html;
}
function dlbl(ds){const n=new Date();n.setHours(0,0,0,0);const d=new Date(ds);d.setHours(0,0,0,0);const df=Math.round((n-d)/864e5);if(df===0)return t('today');if(df===1)return t('yesterday');return ds;}
function delTx(id){G.txs=G.txs.filter(t=>t.id!==id);save();rHome();rTx();showToast(t('deleted'));}
function edTx(id){
  G.eid=id;const tx=G.txs.find(t=>t.id===id);if(!tx)return;
  OA();setTimeout(()=>{ST(tx.type);document.getElementById('fa').value=tx.amount;document.getElementById('fd').value=tx.desc||'';document.getElementById('fdt').value=tx.date;document.getElementById('atit').textContent=t('editTransaction');selCat(tx.category);},100);
}

function CP(d){G.sm+=d;if(G.sm>11){G.sm=0;G.sy++;}if(G.sm<0){G.sm=11;G.sy--;}rStats();}
function rStats(){
  const txs=mTxs(G.sm,G.sy);
  document.getElementById('pl').textContent=t('months')[G.sm]+' '+G.sy;
  const inc=txs.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
  const exp=txs.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);
  const days=new Date(G.sy,G.sm+1,0).getDate();
  document.getElementById('ki').textContent='+'+fmt(inc);
  document.getElementById('ke').textContent='-'+fmt(exp);
  document.getElementById('ks').textContent=inc>0?Math.round((inc-exp)/inc*100)+'%':'0%';
  document.getElementById('ka').textContent=fmt(exp/days);
  const wks=[[],[],[],[]];
  txs.filter(t=>t.type==='expense').forEach(tx=>{const w=Math.min(Math.floor((new Date(tx.date).getDate()-1)/7),3);wks[w].push(tx.amount);});
  const wt=wks.map(w=>w.reduce((s,a)=>s+a,0)),mx=Math.max(...wt,1);
  document.getElementById('bch').innerHTML=wt.map((v,i)=>`<div class="bcol"><div class="bar" style="height:${Math.round(v/mx*100)}%;background:linear-gradient(180deg,#2D6A4F,#52B788)"></div><div class="blbl">W${i+1}</div></div>`).join('');
  const ce={};txs.filter(t=>t.type==='expense').forEach(tx=>{ce[tx.category]=(ce[tx.category]||0)+tx.amount;});
  const sorted=Object.entries(ce).sort((a,b)=>b[1]-a[1]);
  if(!sorted.length){document.getElementById('dsv').innerHTML=`<circle cx="50" cy="50" r="38" fill="none" stroke="#E8E4DC" stroke-width="16"/>`;document.getElementById('dleg').innerHTML=`<p style="color:var(--text3);font-size:12px">${t('noTx')}</p>`;document.getElementById('cbk').innerHTML='';return;}
  const tot=sorted.reduce((s,e)=>s+e[1],0),r=38,cx=50,cy=50,circ=2*Math.PI*r;
  let off=0,svgH=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#E8E4DC" stroke-width="16"/>`,legH='',bkH='';
  sorted.forEach(([id,val])=>{
    const cat=G.cats.find(c=>c.id===id)||{i:'💰',c:'#2D6A4F',nm:{ar:id}};
    const pct=val/tot,dash=pct*circ;
    svgH+=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${cat.c}" stroke-width="16" stroke-dasharray="${dash} ${circ-dash}" stroke-dashoffset="${-off*circ}" transform="rotate(-90 50 50)"/>`;
    off+=pct;
    legH+=`<div class="lr"><div class="ldot" style="background:${cat.c}"></div><span class="ln">${cat.i} ${cn(cat)}</span><span class="lp">${Math.round(pct*100)}%</span></div>`;
    bkH+=`<div class="csr"><div class="csi" style="background:${cat.c}16">${cat.i}</div><div class="csif"><div class="csn">${cn(cat)}</div><div class="csbg"><div class="csbf" style="width:${Math.round(pct*100)}%;background:${cat.c}"></div></div></div><div class="csa" style="color:${cat.c}">${fmt(val)}</div></div>`;
  });
  document.getElementById('dsv').innerHTML=svgH;document.getElementById('dleg').innerHTML=legH;document.getElementById('cbk').innerHTML=bkH;
}

function rSett(){applyLang();document.getElementById('ccs').textContent=G.cats.length+' '+t('categories');}

function OA(){
  G.eid=null;document.getElementById('atit').textContent=t('addTransaction');
  document.getElementById('fa').value='';document.getElementById('fd').value='';
  document.getElementById('fdt').value=new Date().toISOString().split('T')[0];
  G.scat=null;ST('expense');bCG();OM('ma');
}
function ST(tp){
  G.stype=tp;
  document.getElementById('tbe').className='tbtn'+(tp==='expense'?' se':'');
  document.getElementById('tbi').className='tbtn'+(tp==='income'?' si':'');
}
function bCG(){document.getElementById('fcg').innerHTML=G.cats.map(c=>`<div class="co${G.scat===c.id?' sel':''}" onclick="selCat('${c.id}')"><span style="font-size:21px">${c.i}</span><span>${cn(c).slice(0,6)}</span></div>`).join('');}
function selCat(id){G.scat=id;bCG();}
function saveTx(){
  const a=parseFloat(document.getElementById('fa').value),d=document.getElementById('fd').value,dt=document.getElementById('fdt').value;
  if(!a||a<=0||!G.scat)return;
  if(G.eid){const i=G.txs.findIndex(t=>t.id===G.eid);if(i>-1)G.txs[i]={...G.txs[i],type:G.stype,amount:a,desc:d,category:G.scat,date:dt};}
  else G.txs.push({id:Date.now().toString(),type:G.stype,amount:a,desc:d,category:G.scat,date:dt});
  save();CM('ma');rHome();rTx();rStats();showToast(t('saved'));
}

function OM(id){
  if(id==='ml'){document.getElementById('ll').innerHTML=LANGS.map(l=>`<div class="lo" onclick="setLang('${l.code}')"><span class="lof">${l.flag}</span><div><div class="lon">${l.name}</div><div class="lonv">${l.nat}</div></div>${G.lang===l.code?'<span class="loc">✓</span>':''}</div>`).join('');}
  if(id==='mc'){document.getElementById('cl').innerHTML=CURRS.map(c=>`<div class="lo" onclick="setCur('${c.code}')"><span class="lof">${c.flag}</span><div style="flex:1"><div class="lon">${c.code} ${c.sym}</div><div class="lonv">${c.n[G.lang]||c.n.en}</div></div>${G.cur.code===c.code?'<span class="loc">✓</span>':''}</div>`).join('');}
  document.getElementById(id).classList.add('open');
}
function CM(id){document.getElementById(id).classList.remove('open');}
document.querySelectorAll('.ov').forEach(o=>o.addEventListener('click',e=>{if(e.target===o)o.classList.remove('open');}));

function setLang(c){G.lang=c;save();CM('ml');applyLang();rHome();rStats();rSett();}
function setCur(c){G.cur=CURRS.find(x=>x.code===c)||CURRS[0];save();CM('mc');rHome();rSett();}

function OCM(){
  document.getElementById('cml').innerHTML=G.cats.map(c=>`<div style="display:flex;align-items:center;gap:11px;padding:11px;background:var(--bg3);border-radius:11px;margin-bottom:7px;"><div style="width:34px;height:34px;border-radius:10px;background:${c.c}16;display:flex;align-items:center;justify-content:center;font-size:18px">${c.i}</div><div style="flex:1;font-size:13px;font-weight:600">${cn(c)}</div><button onclick="delCat('${c.id}')" style="background:var(--red-light);color:var(--red);border:none;width:28px;height:28px;border-radius:8px;cursor:pointer">🗑</button></div>`).join('');
  OM('mcm');
}
function delCat(id){if(G.cats.length<=2)return;G.cats=G.cats.filter(c=>c.id!==id);save();OCM();document.getElementById('ccs').textContent=G.cats.length+' '+t('categories');}
function OAC(){
  G.semoji='📦';G.scolor=COLORS[0];
  document.getElementById('ncn').value='';
  document.getElementById('ep').innerHTML=EMOJIS.map(e=>`<div class="eo${G.semoji===e?' sel':''}" onclick="SE('${e}')">${e}</div>`).join('');
  document.getElementById('cpp').innerHTML=COLORS.map(c=>`<div class="cd${G.scolor===c?' sel':''}" style="background:${c}" onclick="SC('${c}')"></div>`).join('');
  OM('mac');
}
function SE(e){G.semoji=e;document.querySelectorAll('.eo').forEach(el=>el.classList.toggle('sel',el.textContent===e));}
function SC(c){G.scolor=c;document.querySelectorAll('.cd').forEach(el=>el.classList.toggle('sel',el.style.background===c));}
function saveNC(){
  const nm=document.getElementById('ncn').value.trim();if(!nm)return;
  G.cats.push({id:'c'+Date.now(),nm:{ar:nm,fr:nm,en:nm,es:nm,de:nm},i:G.semoji,c:G.scolor});
  save();CM('mac');OCM();document.getElementById('ccs').textContent=G.cats.length+' '+t('categories');showToast(t('catAdded'));
}

const LTXT={privacy:{ar:`<h3>سياسة الخصوصية</h3><p>نأخذ خصوصيتك على محمل الجد. يتم تخزين جميع بياناتك محلياً على جهازك فقط ولا تُرسل إلى أي خادم خارجي.</p><h3>البيانات المجمعة</h3><p>لا يجمع SpendX أي بيانات شخصية من مستخدميه. معاملاتك وإعداداتك تبقى على جهازك فقط.</p><h3>حقوقك</h3><p>يمكنك حذف جميع بياناتك في أي وقت من قسم البيانات في الإعدادات.</p>`,en:`<h3>Privacy Policy</h3><p>All your data is stored locally on your device only and is never sent to any server.</p><h3>Data Collection</h3><p>SpendX does not collect any personal data. Your transactions stay on your device.</p><h3>Your Rights</h3><p>You can delete all your data at any time from Settings.</p>`,fr:`<h3>Politique de confidentialité</h3><p>Toutes vos données sont stockées localement sur votre appareil et ne sont jamais envoyées à un serveur.</p><h3>Collecte de données</h3><p>SpendX ne collecte aucune donnée personnelle.</p><h3>Vos droits</h3><p>Vous pouvez supprimer toutes vos données depuis les paramètres.</p>`,es:`<h3>Política de Privacidad</h3><p>Todos sus datos se almacenan localmente y nunca se envían a ningún servidor.</p><h3>Sus derechos</h3><p>Puede eliminar todos sus datos desde Ajustes.</p>`,de:`<h3>Datenschutz</h3><p>Alle Daten werden lokal gespeichert und nie an Server gesendet.</p><h3>Ihre Rechte</h3><p>Sie können alle Daten jederzeit löschen.</p>`},terms:{ar:`<h3>شروط الخدمة</h3><p>باستخدامك لـ SpendX فإنك توافق على هذه الشروط. هذا التطبيق مخصص للاستخدام الشخصي فقط.</p><h3>إخلاء المسؤولية</h3><p>SpendX لا يقدم أي نصائح مالية أو استثمارية. أنت مسؤول عن قراراتك المالية.</p><h3>التعديلات</h3><p>نحتفظ بالحق في تعديل هذه الشروط في أي وقت.</p>`,en:`<h3>Terms of Service</h3><p>By using SpendX you agree to these terms. This app is for personal use only.</p><h3>Disclaimer</h3><p>SpendX does not provide financial advice. You are responsible for your financial decisions.</p>`,fr:`<h3>Conditions d'utilisation</h3><p>En utilisant SpendX vous acceptez ces conditions. Cette app est destinée à un usage personnel.</p><h3>Avertissement</h3><p>SpendX ne fournit pas de conseils financiers.</p>`,es:`<h3>Términos de Servicio</h3><p>Al usar SpendX acepta estos términos. Esta app es para uso personal.</p>`,de:`<h3>Nutzungsbedingungen</h3><p>Mit der Nutzung von SpendX stimmen Sie zu. Diese App ist für den persönlichen Gebrauch.</p>`}};
function SL(type){document.getElementById('lbody').innerHTML=(LTXT[type][G.lang]||LTXT[type].en);document.querySelectorAll('.page').forEach(p=>p.classList.remove('act'));document.getElementById('plg').classList.add('act');document.querySelectorAll('.ni').forEach(n=>n.classList.remove('act'));document.getElementById('nse').classList.add('act');}

function expD(){const b=new Blob([JSON.stringify({txs:G.txs,cats:G.cats,exp:new Date().toISOString()},null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='spendx.json';a.click();showToast(t('exported'));}
function clrD(){if(!confirm(t('confirmClear')))return;G.txs=[];save();rHome();rTx();rStats();showToast(t('cleared'));}

function showToast(msg){const el=document.getElementById('toast');el.textContent=msg;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2000);}

load();
G.sm=new Date().getMonth();G.sy=new Date().getFullYear();
if(G.user){enterApp();}else{SS('sl');applyLang();}
</script>

</body>
</html>