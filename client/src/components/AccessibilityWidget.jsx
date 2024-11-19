import { Accessibility } from 'accessibility';


var labels = {
    resetTitle: 'reset (in my language)',
    closeTitle: 'close (in my language)',
    menuTitle: 'נגישות',
    increaseText: 'הגדל טקסט',
    decreaseText: 'decrease text size (in my language)',
    increaseTextSpacing: 'increase text spacing (in my language)',
    decreaseTextSpacing: 'decrease text spacing (in my language)',
    increaseLineHeight: 'increase line height (in my language)',
    decreaseLineHeight: 'decrease line height (in my language)',
    invertColors: 'invert colors (in my language)',
    grayHues: 'gray hues (in my language)',
    underlineLinks: 'underline links (in my language)',
    bigCursor: 'big cursor (in my language)',
    readingGuide: 'reading guide (in my language)',
    textToSpeech: 'text to speech (in my language)',
    speechToText: 'speech to text (in my language)',
    disableAnimations: 'disable animations (in my language)',
    hotkeyPrefix: 'Hotkey: (in my language)',
};

var options = { labels: labels };
options.textToSpeechLang = 'he-IL'; // or any other language
options.speechToTextLang = 'he-IL'; // or any other language
new Accessibility(options);
function AccessibilityWidget() {


    return (
        <></>
    );
}

export default AccessibilityWidget;