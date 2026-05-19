 
//pointer

document.addEventListener('DOMContentLoaded', () => {
const follower = document.querySelector('#pointer');

    window.addEventListener('mousemove', (e) => {
        window.requestAnimationFrame(() => {
    pointer.style.left = e.clientX + 'px';
    pointer.style.top = e.clientY + 'px';
  });
    });
});

//word wrapping
    document.addEventListener("DOMContentLoaded", () => {
    const wrapElement = (el) => {
    const content = el.innerHTML;
    el.innerHTML = ""; 
    const createLetter = (char, color, size) => {
        const s = document.createElement('span');
        s.style.display = "inline-block"; 
        if (color) s.style.color = color;
        if (size) s.style.fontSize = size;
        s.innerHTML = char === " " ? "&nbsp;" : char;
        s.style.setProperty('--speed', (Math.random() * 1.5 + 0.5).toFixed(2));
        s.style.setProperty('--direction', Math.random() < 0.5 ? '1' : '-1');
        return s;
    };
    const createWordContainer = () => {
        const span = document.createElement('span');
        span.style.whiteSpace = "nowrap"; 
        span.style.display = "inline-block"; 
        return span;
    };
    const parts = content.split(/(<span.*?>.*?<\/span>|<wbr>|\s+)/g);
    parts.forEach(part => {
        if (!part) return;
        if (part === '<wbr>' | part === "<br>") {
            el.innerHTML += part;
        } 
        else if (part.match(/^\s+$/)) {
            el.appendChild(document.createTextNode(" "));
        }
        else if (part.startsWith('<span')) {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = part;
            const originalSpan = tempDiv.firstChild;
            const color = originalSpan.style.color;
            const size = originalSpan.style.fontSize;
            const wordWrap = createWordContainer();
            [...originalSpan.textContent].forEach(char => {
                wordWrap.appendChild(createLetter(char, color, size));
            });
            el.appendChild(wordWrap);
        } 
        else {
            const words = part.split(" ");
            words.forEach((word, index) => {
                if (word.length > 0) {
                    const wordWrap = createWordContainer();
                    [...word].forEach(char => {
                        wordWrap.appendChild(createLetter(char));
                    });
                    el.appendChild(wordWrap);
                }
                if (index < words.length - 1) {
                    el.appendChild(document.createTextNode(" "));
                }
            });
        }
    });
};

    const targetPara = document.querySelector('.greeting-content p');
    if (targetPara) wrapElement(targetPara);
    const title = document.querySelector('.greeting h1');
    if(title) wrapElement(title);
});
