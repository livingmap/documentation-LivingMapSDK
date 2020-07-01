/**
 * Dynamic multiple language example code block.
 */

$(function() {

    $('.example-code').each(function() {

        let $tab_wrapper = $('<ul>', {class: "platform-tab-wrapper"});
        let first = true;

        $('.platform', this).each(function () {

            let platform_class = '';
            let platform_text = '';

            let classList = $(this).attr('class').split(/\s+/);

            for (let i = 0; i < classList.length; i++) {
                if (~classList[i].indexOf("platform-")) {
                    platform_class = classList[i];
                    break;
                }
            }

            switch (platform_class) {
                case 'platform-android' :
                    platform_text = 'Android';
                    break;
                case 'platform-ios' :
                    platform_text = 'iOS';
                    break;
                default :
                    platform_text = platform_class.substring(9);
            }

            let $tab = $('<li>', {
                class: platform_class,
                text: platform_text,
                'data-platform': platform_class.substring(9)
            });

            if (first) {
                $(this).addClass('selected');
                $tab.addClass('selected');
            }

            $tab_wrapper.append($tab);
            first = false;
        });

        $(this).prepend($tab_wrapper);
    });


    $('.example-code .platform-tab-wrapper li').on('click', function (e) {
        e.preventDefault();

        let $clicked_tab = $(this);
        let $tabs_wrapper = $clicked_tab.closest('.platform-tab-wrapper');

        let $blocks_wrapper = $clicked_tab.closest('.example-code');
        let $block_to_select = $blocks_wrapper.find( '.platform-' + $clicked_tab.attr('data-platform') );

        $tabs_wrapper.find('li.selected').removeClass('selected');
        $blocks_wrapper.find('.platform.selected').removeClass('selected');

        $clicked_tab.addClass('selected');
        $block_to_select.addClass('selected');

    });

});

