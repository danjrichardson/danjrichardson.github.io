import { gsap, Expo } from "gsap";

const init = () => {
    const menuButton = document.querySelector('#menuButton');
    const menuHighlight = document.querySelector('#menuHighlight');
    const menuContents = document.querySelector('#menuContents');
    const menuContentItems = Array.from(menuContents.querySelectorAll('a'));
    const { bottom, width, height, x } = menuButton.getBoundingClientRect();
    const cs = getComputedStyle(menuButton)
    const highlightTop = bottom - parseFloat(cs.paddingBottom);
    const highlightLeft = x + parseFloat(cs.paddingLeft);
    const highlightWidth = width - (parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight));

    menuHighlight.classList.remove('opacity-0');
    menuContents.classList.remove('pointer-events-none', 'opacity-0');

    gsap.set(menuHighlight, {
        top: -1
    });
    
    const tl = gsap.timeline({ paused: true });
    tl
        .set(menuHighlight, { top: 0, left: highlightLeft + (highlightWidth/2), width: 1, height: highlightTop, scaleY: 0, transformOrigin: 'top' })
        .set(menuContents, { y: '-100%', opacity: 1 })
        .to(menuHighlight, { scaleY: 1, duration: .1 })
        .to(menuHighlight, { scaleY: 0, transformOrigin: 'bottom' })
        .set(menuHighlight, { scaleY: 1, scaleX: 0, top: highlightTop, width: highlightWidth, height: '1px', left: highlightLeft, transformOrigin: 'center' })
        .to(menuHighlight, { scaleX: 1, duration: .3 })
        .addLabel('idle')
        .to(menuHighlight, { y: 5, duration: .1 })
        .addLabel('idle:hover')
        .to(menuHighlight, { y: parseFloat(cs.paddingBottom), duration: .1 })
        .to(menuHighlight, { x: 0, duration: 0.1 } )
        .set(menuHighlight, { width: '100%' })
        .addLabel('opening')
        .to(menuHighlight, { x: highlightLeft * -1, duration: 0.4 })
        .to(menuHighlight, { opacity: 0.1, duration: .2 })
        .to(menuContents, { y: 0, ease: Expo.easeInOut, duration: .8 }, '-=.4')
        .from(menuContentItems, { y: '-50%', opacity: 0, stagger: .05, duration: .4 }, '-=.4')
        .addLabel('itemsStagger')
        .addLabel('open');

    tl.tweenTo('idle');

    menuButton.dataset.isOpen = false;

    const booleanIs = (variable, check) => {
        return variable.toString() === check.toString();
    }

    menuButton.addEventListener('mouseenter', () => {
        if (booleanIs(menuButton.dataset.isOpen, false)){
            tl.tweenFromTo('idle', 'idle:hover');
        }
    });
    menuButton.addEventListener('mouseleave', () => {
        if (booleanIs(menuButton.dataset.isOpen, false)){
            if (!tl.isActive()){
                tl.tweenFromTo('idle:hover', 'idle');
            }
        }
    });
    menuButton.addEventListener('click', () => {
        if (booleanIs(menuButton.dataset.isOpen, false)){
            tl.play();
            menuButton.innerHTML = 'Close';
        } else {
            tl.tweenFromTo('itemsStagger', 'idle:hover');
            menuButton.innerHTML = 'Menu';
        }
        menuButton.dataset.isOpen = !booleanIs(menuButton.dataset.isOpen, true);
    });
}

export default init;