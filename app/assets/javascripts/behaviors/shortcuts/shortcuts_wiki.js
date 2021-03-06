import Mousetrap from 'mousetrap';
import ShortcutsNavigation from './shortcuts_navigation';
import findAndFollowLink from '../../lib/utils/navigation_utility';

export default class ShortcutsWiki extends ShortcutsNavigation {
  constructor() {
    super();
    Mousetrap.bind('e', ShortcutsWiki.editWiki);

    this.enabledHelp.push('.hidden-shortcut.wiki');
  }

  static editWiki() {
    findAndFollowLink('.js-wiki-edit');
  }
}
