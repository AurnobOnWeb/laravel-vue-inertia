import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";

//for progress bar
import NProgress from "nprogress";
import { router } from "@inertiajs/vue3";

router.on("start", () => NProgress.start());
router.on("finish", () => NProgress.done());
// end progress

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
        return pages[`./Pages/${name}.vue`];
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el);
    },
    progress: {
        delay: 250,
        color: "#29d",
        includeCSS: true,
        showSpinner: true,
    },
});
