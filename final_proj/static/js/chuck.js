$(document).ready(function() {
    const chuck_generate_btn = document.querySelector('#chuck_generate_btn');
    const quote = document.querySelector('#quote');
    const icon_img_placeholder = document.querySelector('#icon_img_placeholder');
    const random_chuck_joke_url = `${config.api}/chuck`;

    // add events
    chuck_generate_btn.onclick = (e) => {
        httpClient.get(random_chuck_joke_url).then((res) => {
            if (!res || !res.value) {
                handleError('No quote found');
                return;
            }
            M.toast({
                html: 'Done!'
            });
            icon_img_placeholder.src = res.icon_url;
            const html = `${res.value} <br> <small>Chuck Norris</small>`
            $(quote).html(html);
        }).catch(e => handleError(e))
    }
})