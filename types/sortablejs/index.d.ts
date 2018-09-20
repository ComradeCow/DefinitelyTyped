// Type definitions for Sortable.js 1.3
// Project: https://github.com/RubaXa/Sortable
// Definitions by: Maw-Fox <https://github.com/Maw-Fox>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Sortable = Sortablejs.Sortable;
export = Sortable;
export as namespace Sortable;

declare namespace Sortablejs {
    interface SortableEvent extends ExtendableEventInit {
        clone: HTMLElement;
        from: HTMLElement;
        item: HTMLElement;
        newIndex: number | undefined;
        oldIndex: number | undefined;
        to: HTMLElement;
    }

    interface SortableMoveEvent extends ExtendableEventInit {
        dragged: HTMLElement;
        draggedRect: DOMRect;
        from: HTMLElement;
        related: HTMLElement;
        relatedRect: DOMRect;
        to: HTMLElement;
        willInsertAfter?: boolean;
    }

    interface SortableOptions {
        group?: any;
        sort?: boolean;
        delay?: number;
        disabled?: boolean;
        store?: {
            get: (sortable: Sortable) => any[];
            set: (sortable: Sortable) => any;
        };
        animation?: number;
        handle?: string;
        filter?: any;
        draggable?: string;
        ghostClass?: string;
        chosenClass?: string;
        dataIdAttr?: string;
        forceFallback?: boolean;
        fallbackClass?: string;
        fallbackOnBody?: boolean;
        scroll?: boolean;
        scrollSensitivity?: number;
        scrollSpeed?: number;
        setData?: (dataTransfer: any, draggedElement: HTMLElement) => any;
        onStart?: (event: SortableEvent) => void;
        onEnd?: (event: SortableEvent) => void;
        onAdd?: (event: SortableEvent) => void;
        onUpdate?: (event: SortableEvent) => void;
        onSort?: (event: SortableEvent) => void;
        onRemove?: (event: SortableEvent) => void;
        onFilter?: (event: SortableEvent) => void;
        onMove?: (event: SortableMoveEvent) => boolean;
    }

    interface SortableUtils {
        /**
         * Attach an event handler function
         * @param {HTMLElement} element an HTMLElement.
         * @param {string} event an Event context.
         * @param {Function} fn
         */
        on(element: HTMLElement, event: string, fn: (event: any) => any): void;

        /**
         * Remove an event handler function
         * @param {HTMLElement} element an HTMLElement.
         * @param {string} event an Event context.
         * @param {Function} fn a callback.
         */
        off(element: HTMLElement, event: string, fn: (event: any) => any): void;

        /**
         * Get the values of all the CSS properties.
         * @param {HTMLElement} element an HTMLElement.
         * @returns {Object}
         */
        css(element: HTMLElement): any;

        /**
         * Get the value of style properties.
         * @param {HTMLElement} element an HTMLElement.
         * @param {string} prop a property key.
         * @returns {*}
         */
        css(element: HTMLElement, prop: string): any;

        /**
         * Set one CSS property.
         * @param {HTMLElement} element an HTMLElement.
         * @param {string} prop a property key.
         * @param {string} value a property value.
         */
        css(element: HTMLElement, prop: string, value: string): void;

        /**
         * Set CSS properties.
         * @param {HTMLElement} element an HTMLElement.
         * @param {Object} props a properties object.
         */
        css(element: HTMLElement, props: any): void;

        /**
         * Get elements by tag name.
         * @param {HTMLElement} context an HTMLElement.
         * @param {string} tagName A tag name.
         * @param {function} [iterator] An iterator.
         * @returns {HTMLElement[]}
         */
        find(context: HTMLElement, tagName: string, iterator?: (value: any) => any): HTMLElement[];

        /**
         * Takes a function and returns a new one that will always have a particular context.
         * @param {HTMLElement} context an HTMLElement.
         * @param {function} fn a function.
         * @returns {function}
         */
        bind(context: HTMLElement, fn: () => any): () => any;

        /**
         * Check the current matched set of elements against a selector.
         * @param {HTMLElement} element an HTMLElement.
         * @param {string} selector an element selector.
         * @returns {boolean}
         */
        is(element: HTMLElement, selector: string): boolean;

        /**
         * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
         * @param {HTMLElement} element an HTMLElement.
         * @param {string} selector an element seletor.
         * @param {HTMLElement} [context] a specific element's context.
         * @returns {HTMLElement}
         */
        closest(element: HTMLElement, selector: string, context?: HTMLElement): HTMLElement | null;

        /**
         * Add or remove one classes from each element
         * @param {HTMLElement} element an HTMLElement.
         * @param {string} name a class name.
         * @param {boolean} state a class's state.
         */
        toggleClass(element: HTMLElement, name: string, state: boolean): void;
    }

    class DOMRect {
        public bottom: number;
        public height: number;
        public left: number;
        public right: number;
        public top: number;
        public width: number;
        public x: number;
        public y: number;
    }

    class Sortable {
        public options: SortableOptions;
        public el: HTMLElement;

        /**
         * Sortable's main constructor.
         * @param {HTMLElement} element Any variety of HTMLElement.
         * @param {SortableOptions} options Sortable options object.
         */
        constructor(element: HTMLElement, options: SortableOptions);

        static active: Sortable;
        static utils: SortableUtils;

        /**
         * Creation of new instances.
         * @param {HTMLElement} element Any variety of HTMLElement.
         * @param {SortableOptions} options Sortable options object.
         * @returns {Sortable}
         */
        static create(element: HTMLElement, options: SortableOptions): Sortable;

        /**
         * Options getter/setter
         * @param {string} name a SortableOptions property.
         * @param {*} [value] a Value.
         * @returns {*}
         */
        option(name: string, value: any): any;
        option(name: string): any;

        /**
         * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
         * @param {string|HTMLElement} element an HTMLElement or selector string.
         * @param   {String}       [selector]  default: `options.draggable`
         * @returns {HTMLElement}
         */
        closest(element: HTMLElement, selector?: string): HTMLElement | null;

        /**
         * Sorts the elements according to the array.
         * @param {string[]} order an array of strings to sort.
         */
        sort(order: string[]): void;

        /**
         * Saving and restoring of the sort.
         */
        save(): void;

        /**
         * Removes the sortable functionality completely.
         */
        destroy(): void;

        /**
         * Serializes the sortable's item data-id's (dataIdAttr option) into an array of string.
         * @returns {string[]}
         */
        toArray(): string[];
    }
}
