export default {
    created() {
        window.addEventListener('scroll', eventHandler);
    },
    destroyed() {
        window.addEventListener("scroll", eventHandler);
    }
};
    function eventHandler(e) {
        console.log(e);
    }
       
