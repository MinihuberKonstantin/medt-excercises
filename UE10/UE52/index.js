function changePage(aboutPageState, imagePageState, gameplayPageState, soundPageState) {
    const aboutPage = document.getElementById('text'), imagePage = document.getElementById('image'), gameplayPage = document.getElementById('video'), soundPage = document.getElementById('audio');

    aboutPage.setAttribute('style', 'display:' + aboutPageState);
    imagePage.setAttribute('style', 'display:' + imagePageState);
    gameplayPage.setAttribute('style', 'display:' + gameplayPageState);
    soundPage.setAttribute('style', 'display:' + soundPageState);
}