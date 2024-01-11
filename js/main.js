// Set a same-site cookie for first-party contexts
document.cookie = 'cookie1=value1; SameSite=Lax';
// Set a cross-site cookie for third-party contexts
document.cookie = 'cookie2=value2; SameSite=None; Secure';

//////////////////// include header, footer
(function () {
    includeLayout();

    function includeLayout() {
        const includeArea = $('[data-include]');

        for (const element of includeArea) {
            const self = $(element);
            const url = self.data('include');
            
            self.load(url, function () {
                self.removeAttr('data-include');
            });
        }
    }
})();

//////////////////// tab menu
$(document).ready(function () {
    // 탭 메뉴 클릭 시 해당 섹션으로 스크롤
    $('.tab-menu a').on('click', function (e) {
        e.preventDefault();
        var targetTabId = $(this).attr('tab-id');
        var targetTab = $('#tab' + targetTabId);

        var offset = targetTab.offset().top;

        // 페이지 상단으로 스크롤
        $('html, body').animate({
            scrollTop: offset
        }, 500);

        // 활성 탭 표시
        $('.tab-menu a').removeClass('active');
        $(this).addClass('active');
    });

    // 스크롤 이벤트 감지하여 활성 탭 변경
    $(window).scroll(function () {
        var scrollPos = $(document).scrollTop() + 80;
    
        $('.tab').each(function () {
            var targetTab = $(this);
            var targetTop = targetTab.offset().top;
            var targetBottom = targetTop + targetTab.outerHeight();
    
            if (scrollPos >= targetTop && scrollPos <= targetBottom) {
                var targetTabId = targetTab.attr('tab-id');
                $('.tab-menu a').removeClass('active');
                $('.tab-menu a[tab-id="' + targetTabId + '"]').addClass('active');
            }
        });
    });
});
