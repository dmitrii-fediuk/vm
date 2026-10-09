// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Upwork/chat/item.js
// @icon https://www.upwork.com/favicon.ico
// @match *://www.upwork.com/ab/messages/rooms/room_*
// @name Upwork / Chat / Item
// ==/UserScript==
// 2026-01-14
// language=CSS
GM_addStyle([
	`.desktop-room-layout` // 2024-10-13, 2026-01-14
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
GM_addStyle('.story-timestamp {cursor: pointer !important;}');
(() => {
	const f = () => {
		if (!window.__dfTimestampPatchInstalled) {
			window.__dfTimestampPatchInstalled = true;
			let cachedUpdRoom = null;
			const findStory = storyId => {
				let r = null;
				if (cachedUpdRoom?.setupState?.findStory) {
					const s = cachedUpdRoom.setupState.findStory(storyId);
					if (s) {
						r = Array.isArray(s) ? s[0] : s;
					}
				}
				if (!r) {
					const root = document.querySelector('#__nuxt')?._vnode;
					if (root) {
						const seen = new Set();
						const walk = (vn, depth = 0) => {
							if (vn && 35 >= depth && !seen.has(vn) && !r) {
								seen.add(vn);
								if (vn.component) {
									const c = vn.component;
									const name = c.type?.name || c.type?.__name;
									if ('UpDRoom' === name) {
										cachedUpdRoom = c;
										if (c.setupState?.findStory) {
											const s = c.setupState.findStory(storyId);
											if (s) {
												r = Array.isArray(s) ? s[0] : s;
											}
										}
									}
									if (!r && storyId === c.props?.story?.storyId) {
										r = c.props.story;
									}
									if (!r && c.subTree) {
										walk(c.subTree, depth + 1);
									}
								}
								if (!r && vn.suspense?.activeBranch) {
									walk(vn.suspense.activeBranch, depth + 1);
								}
								if (!r && Array.isArray(vn.children)) {
									for (const ch of vn.children) {
										if (r) {
											break;
										}
										if (ch && 'object' === typeof ch) {
											walk(ch, depth + 1);
										}
									}
								}
								if (!r && Array.isArray(vn.dynamicChildren)) {
									for (const ch of vn.dynamicChildren) {
										if (r) {
											break;
										}
										if (ch && 'object' === typeof ch) {
											walk(ch, depth + 1);
										}
									}
								}
							}
						};
						walk(root);
					}
				}
				return r;
			};
			const onClick = e => {
				const ts = e.target.closest('.story-timestamp');
				if (ts) {
					const item = ts.closest('.up-d-story-item');
					if (item?.id) {
						const story = findStory(item.id);
						if (story?.created) {
							const router = document.querySelector('#__nuxt')?.__vue_app__?.config?.globalProperties?.$router;
							if (router) {
								const cur = router.currentRoute.value;
								router.push({
									name: cur.name || 'rooms',
									params: {...cur.params, roomId: story.roomId || cur.params.roomId, storyId: story.storyId},
									query: {...cur.query, atTimestamp: String(story.created)}
								}).catch(() => {});
							}
						}
					}
				}
			};
			document.addEventListener('click', onClick, true);
		}
	};
	const s = document.createElement('script');
	s.textContent = '(' + f.toString() + ')();';
	(document.head || document.documentElement).appendChild(s);
	s.remove();
})();
