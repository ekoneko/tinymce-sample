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
import 'tinymce/skins/lightgray/skin.min.css';

import 'tinymce-yentext';
import 'tinymce-plugin-responsive-image';
import 'tinymce-plugin-h5img';

declare global {
    interface Window {
        tinyMCE: any;
        tinymce: any;
    }
}

window.tinyMCE.init({
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
    init_instance_callback: ed => {},
})
