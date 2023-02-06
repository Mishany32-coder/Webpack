import * as $ from 'jquery';

function createAnalytics() :object {
    let counter     = 0;
    let destroyed: boolean = false;

    const listener = () :number => counter++;

    $(document).bind('click', listener);

    return {
        destroy() {
            $(document).unbind('click', listener);
            destroyed = true;
        },

        getClicks() {
            if (destroyed) {
                return `Analytics is destroyed. Total clicks = ${counter}`;
            }
            return counter;
        }
    }
}

window['analytics']=createAnalytics();