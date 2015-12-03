/**
 * This is the spec, or ruleset, that is used to direct the
 * DOM scraper, which converts each matched rule to a simpler,
 * purer representation, which we can then use to fill a template.
*/
export default {

    rules: [

        {
            role: 'subject',
            transform: 'content',
            selector: '#title_bar',
        },

        {
            role: 'search',
            label: 'Search',
            transform: 'form',
            selector: 'form[action=""]',
            controls: [
                { name:'q',      transform:'input', selector:'input[name="q"]' },
                { name:'near',   transform:'input', selector:'input[name="near"]' },
                { name:'submit', transform:'input', selector:'button' },
            ],
        },

        {
            role: 'filters',
            label: 'Location',
            transform: 'form',
            selector: '#left_nav > form',
            controls: [
                { name:'near',   transform:'input', selector:'input[name="near"]' },
                { name:'stok',   transform:'input', selector:'input[name="stok"]' },
                { name:'rl',     transform:'input', selector:'input[name="rl"]' },
                { name:'submit', transform:'input', selector:'input[type="submit"]' },
            ],
        },

        {
            role: 'filters',
            label: 'Dates',
            transform: 'nav',
            selector: '#left_nav > .section:nth-child(2)',
            itemSelector: 'a,b',
        },

        {
            role: 'filters',
            label: 'Times',
            transform: 'nav',
            selector: '#left_nav > .section:nth-child(3)',
            itemSelector: 'a,b',
        },

        {
            role: 'filters',
            label: 'Category',
            transform: 'nav',
            selector: '#left_nav > .section:nth-child(4)',
            itemSelector: 'a,b',
        },

        {
            role: 'filters',
            label: 'Display',
            transform: 'nav',
            selector: '#left_nav > .section:nth-child(5)',
            itemSelector: 'a,b',
        },

        {
            role: 'content',
            transform: 'list',
            label: 'Contents',
            selector: '.movie_results > *',
            header: {
                selector: '.header, .desc',
                transform: 'content',
            },
            items: {
                selector: '.showtimes > * > *',
                transform: 'content',
            },
        },

        {
            role: 'pagination',
            label: 'Pagination',
            transform: 'nav',
            selector: '#navbar',
            itemSelector: 'td span, td a',
        },
    ],

};
