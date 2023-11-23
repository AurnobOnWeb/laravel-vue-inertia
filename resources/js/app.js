import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { Link, Head } from "@inertiajs/vue3";

import Layout from "./Shared/Layout.vue";
// progress bar
import NProgress from "nprogress";
import { router } from "@inertiajs/vue3";

router.on("start", () => NProgress.start());
router.on("finish", () => NProgress.done());
// end progress bar

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
        let page = pages[`./Pages/${name}.vue`];
        page.default.layout = page.default.layout || Layout;
        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component("Link", Link)
            .component("Head", Head)
            .mount(el);
    },
    progress: {
        delay: 250,
        color: "#29d",
        includeCSS: true,
        showSpinner: true,
    },
    title: (title) => "App - " + title,
});
