import 'tinymce';
import 'tinymce/plugins/link';
import 'tinymce/plugins/code';
import 'tinymce/plugins/textcolor';
import 'tinymce/plugins/image';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/table';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/contextmenu';
import 'tinymce/plugins/textpattern';
import 'tinymce/themes/modern';
import 'tinymce-yentext';
import 'tinymce-plugin-responsive-image';
import 'tinymce-plugin-h5img';
import './style.css';
import './skin/skin.min.css';

declare global {
    interface Window {
        tinyMCE: any;
        tinymce: any;
    }
}

const scroll = editor => event => {
    const container: HTMLElement = editor.getContainer();
    const toolbar = <HTMLElement>container.querySelector('.mce-toolbar-grp');
    const offsetTop = container.offsetTop;
    const offsetLeft = container.offsetLeft;
    if (offsetTop - document.body.scrollTop < 10) {
        // fixed on top
        container.classList.add('ontop');
        toolbar.style.left = `${offsetLeft}px`;
        toolbar.style.width = `${container.clientWidth}px`;
    } else {
        // not absolute
        container.classList.remove('ontop');
        toolbar.style.left = '';
        toolbar.style.width = '';
    }
}

window.tinyMCE.init({
    width: '80%',
    selector: '#editor',
    menubar: false,
    statusbar: false,
    auto_focus: false,
    toolbar1: 'undo redo | styleselect bold italic forecolor outdent indent | link h5img yen',
    plugins: 'link code textcolor h5img yen autolink responsiveImage',
    min_height: 300,
    resize: true,
    skin: false,
    theme: 'modern',
    init_instance_callback: ed => {
        document.addEventListener('scroll', scroll(ed))
    },
})
