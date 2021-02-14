class actionSpace {

}

class actionEventController extends actionSpace {
    constructor(context) {
        this._events = {};
        this.context = context
        //  this.createListeners(context)
    }
    addListener(event, fn) {
        /** 
         * The addListener event checks if the event is already registered.
         * If yes, returns the array, otherwise empty array.
         * A note: Multiple callbacks can be registered against that same event.
         */
        this.listeners[event] = this.listeners[event] || [];
        this.listeners[event].push(fn);
        return this;
    }

    createListeners(entity) {
        console.log(entity)
        let events = dataHelpers.find(entity, 'on')
        console.log(events)
        events.forEach((evt) => {
            window[evt] = this.conductEvent // to be changed to add Listerner
        })
    }

    on(event, fn) {
        return this.addListener(event, fn);
    }

    emit(eventName, ...args) {
        let fns = this.listeners[eventName]; //Get the functions for said eventName parameter
        if (!fns) return false; //If no listeners, return false
        fns.forEach((f) => {
            f(...args); // For all function listeners, invoke the function with the arguments
        });
        return true; //Return true when done
    }

    conductEvent(e) {
        console.log(e.type, e.target);

    }

}

window.onload = loadActionEventController;

function loadActionEventController() {
    var actionEventInstance = new actionEventController();
    actionEventInstance.createListeners(document.getElementsByTagName('actionSpace'));
    console.log("loaded ActionEvents", actionEventInstance);
}



class actionDataController extends actionSpace {

}

class actionEntityModel extends actionSpace {

}

class actionSpaceView extends actionSpace {

}
class localStorage extends actionSpace {


}
class dataHelpers extends actionSpace {

}

class process extends actionSpace {

}
class operate extends actionSpace {

}
class actionEngine extends actionSpace {

}