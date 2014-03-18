/* Unicode Font Checker - http://goo.gl/nzUMu
 *
 * @author Livingston Samuel
 * Based on idea and implementation of Alex Young, http://dailyjs.com/2010/05/12/language-support
 */
(function (W, D) {
    var fontChecker = (function () {
        var span = D.createElement('span'),
            div = D.createElement('div'),
            body = D.body,
            firstChild = body.firstChild,

            langs = {
                'arabic': ['\u06c2', '\u06d2'],
                'aramic': ['\ud802\udc44', '\ud802\udc46'],
                'avestan': ['\ud802\udf00', '\ud802\udf01'],
                'bamum': ['\ua6f3', '\ua6f4'],
                'bengali': ['\u0985', '\u0986'],
                'carian': ['\ud800\udea2', '\ud800\udec5'],
                'cryllic': ['\u0402', '\u04b1'],
                'devanagri': ['\u0930', '\u0964'],
                'ethiopic': ['\u1220', '\u1221'],
                'georgian': ['\u10a4', '\u10a5'],
                'glagolitic': ['\u2c15', '\u2c45'],
                'gothic': ['\ud800\df38', '\ud800\df39'],
                'greek': ['\u03e2', '\u03e3'],
                'gujarati': ['\u0a85', '\u0a86'],
                'hebrew': ['\u05df', '\u05e3'],
                'hieroglyphs': ['\u130d0', '\u130d1'],
                'hiragana': ['\u3044', '\uff70'],
                'japanese': ['\uff71', '\u30a2'],
                'kannada': ['\u0c89', '\u0c90'],
                'lao': ['\u0ec0', '\u0ec1'],
                'latin': ['\u004c', '\u006c'],
                'malayalam': ['\u0d05', '\u0d06'],
                'mongolian': ['\u1830', '\u1827'],
                'oriya': ['\u0b05', '\u0b06'],
                'osmanya': ['\ud801\udc81', '\ud801\udc83'],
                'syriac': ['\u0712', '\u0713'],
                'tamil': ['\u0b85', '\u0bf5'],
                'telugu': ['\u0c18', '\u0d18'],
                'thai': ['\u0e12', '\u0e40'],
                'tibetan': ['\u0f11', '\u0f12']
            };

        return function (lang) {
            if (!(lang in langs)) {
                return false;
            }

            var selectedLang = langs[lang],
                charA = span.cloneNode(false),
                charB = span.cloneNode(false),
                holder = div.cloneNode(false),
                fontExists = false;

            charA.appendChild(D.createTextNode(selectedLang[0]));
            charB.appendChild(D.createTextNode(selectedLang[1]));

            holder.appendChild(charA);
            holder.appendChild(charB);

            body.insertBefore(holder, firstChild);

            fontExists = charA.offsetWidth !== charB.offsetWidth;

            body.removeChild(holder);
            holder = charA = charB = null;

            return fontExists;
        };
    }());

    W.fontChecker = fontChecker;
}(window, document));
