enum ComponentStyle {
    ACTION = 'px-4 py-2 rounded-md',
    DROPDOWN = 'list-none',
    DROPDOWN_TRIGGER = 'list-none w-full cursor-pointer',
    DROPDOWN_TRIGGER_WRAPPER = 'pointer-events-none',
    INPUT = 'bg-primary-light border-primary-light text-dark placeholder-opacity-40 placeholder-dark px-4 py-2 w-full transition-colors duration-500 cursor-pointer border-b-2',
    INPUT_FOCUS = 'focus:bg-primary focus:border-primary focus:outline-none',
    INPUT_HOVER = 'hover:bg-primary-dark hover:border-primary-dark',
    NAVIGATION = 'flex bg-primary justify-between items-center w-screen py-2 px-4',
    NAVIGATION_HEADER = 'text-2xl',
    NAVIGATION_ACTIONS = '',
    PILL = 'py-2 px-4 shadow-md rounded-full font-semibold text-sm mr-2 w-max',
    SPINNER_OUTER = 'ease-linear rounded-full h-20 w-20 relative border-4 border-primary-light',
    SPINNER_INNER = 'ease-linear rounded-full h-20 w-20 absolute -top-1 -left-1 border-t-8 border-b-0 border-l-4 border-r-0 border-primary-dark animate-spin',
    TABS = 'flex',
    TAB = 'px-6',
    TAB_ACTIVE = 'border-b-2 border-primary',
    TAB_CONTENT_HIDDEN = 'hidden',
    TAB_CONTENT_WRAPPER = 'py-4',
    VIDEO_WRAPPER = 'relative',
    VIDEO = 'absolute inset-0 w-full h-full',
}

export default ComponentStyle;