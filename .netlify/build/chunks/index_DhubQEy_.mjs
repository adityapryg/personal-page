import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro/server_BLBFWlNj.mjs';
import { a as getImage } from './_astro_assets_Bdj6nx-l.mjs';
import 'clsx';

const Astro__Z1vij5c = new Proxy({"src":"/_astro/bukubook.BXuRhgnG.png","width":1494,"height":948,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/laragon/www/adityaprayoga/src/content/projects/bukubook/bukubook.png";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./bukubook\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./bukubook.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z1vij5c, ...props});
													occurrenceCounter++;
											}
									}
					return imageSources;
			};

			async function updateImageReferences(html) {
				return images(html).then((imageSources) => {
						return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
								const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));
		
								// Use the 'index' property for each image occurrence
								const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;
		
								if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
										imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
								}
		
								const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;
		
								return spreadAttributes({
										src: imageSources[srcKey].src,
										...attributesWithoutIndex,
								});
						});
				});
		}
		

		// NOTE: This causes a top-level await to appear in the user's code, which can break very easily due to a Rollup
	  // bug and certain adapters not supporting it correctly. See: https://github.com/rollup/rollup/issues/4708
	  // Tread carefully!
			const html = await updateImageReferences("<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./bukubook.png&#x22;,&#x22;alt&#x22;:&#x22;BukuBook&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>BukuBook adalah aplikasi manajemen buku. Project sudah termasuk dengan authentikasi dan multiple roles (User&#x26;Admin). Project ini sekaligus mempelajari konsep relasi database one to many dan sebaliknya.</p>\n<p>BukuBook dibuat menggunakan framework <a href=\"https://laravel.com\">PHP Laravel</a>, <a href=\"https://docker.com\">Docker</a> untuk deployment, dan SQL Database.</p>\n<p>BukuBook adalah sample project untuk mendemonstrasikan pembuatan CRUD Laravel pada course Laravel Fundamentals yang saya ajar. Aplikasi ini dibuat dengan front-end <a href=\"https://laravel.com/docs/master/blade\">Blade</a> untuk konsep monolithic-apps.</p>\n<p>Visit <a href=\"https://github.com/adityapryg/bukubook\">BukuBook Repository</a> to get started.</p>\n<h2 id=\"-features\">📋 Features</h2>\n<ul>\n<li>Authentication\n<ul>\n<li>Register</li>\n<li>Login</li>\n<li>Support Multiple Roles (User &#x26; Admin)</li>\n</ul>\n</li>\n<li>CRUD User</li>\n<li>CRUD Book’s Category</li>\n<li>CRUD Book</li>\n</ul>\n<h2 id=\"-requirements\">📄 Requirements</h2>\n<ul>\n<li>PHP ^8.0</li>\n<li>Composer</li>\n<li>NodeJS</li>\n<li>MySQL/PostgreSQL</li>\n</ul>\n<h2 id=\"-installation-step\">💻 Installation Step</h2>\n<p>All commands are run from the root of the project, from a terminal:</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th align=\"left\">Command</th><th align=\"left\">Action</th></tr></thead><tbody><tr><td align=\"left\"><code>git clone https://github.com/adityapryg/bukubook.git</code></td><td align=\"left\">Clone the repository</td></tr><tr><td align=\"left\"><code>cp  .env.example .env</code></td><td align=\"left\">Config APP_NAME &#x26; Database Connection in env</td></tr><tr><td align=\"left\"><code>composer install</code></td><td align=\"left\">Installing BukuBook php modules.</td></tr><tr><td align=\"left\"><code>php artisan key:generate</code></td><td align=\"left\">Generate APP_KEY</td></tr><tr><td align=\"left\"><code>npm install</code></td><td align=\"left\">Installing BukuBook js modules</td></tr><tr><td align=\"left\"><code>npm run build</code></td><td align=\"left\">Building assets (using Vite)</td></tr><tr><td align=\"left\"><code>php artisan migrate --seed</code></td><td align=\"left\">Migrating the database scheme and seed dummy contents</td></tr><tr><td align=\"left\"><code>php artisan storage:link</code></td><td align=\"left\">Linking public and storage, used for book’s cover image</td></tr><tr><td align=\"left\"><code>php artisan serve</code></td><td align=\"left\">Running laravel locally</td></tr></tbody></table>");
	

				const frontmatter = {"title":"BukuBook","description":"Aplikasi CRUD Buku beserta Auth dan Multi-roles.","date":"2024-05-26","demoURL":"https://bukubook.adityapryg.my.id","repoURL":"https://github.com/adityapryg/bukubook","type":"public","tags":["laravel","blade"]};
				const file = "C:/laragon/www/adityaprayoga/src/content/projects/bukubook/index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n![BukuBook](./bukubook.png)\r\n\r\nBukuBook adalah aplikasi manajemen buku. Project sudah termasuk dengan authentikasi dan multiple roles (User&Admin). Project ini sekaligus mempelajari konsep relasi database one to many dan sebaliknya.\r\n\r\nBukuBook dibuat menggunakan framework [PHP Laravel](https://laravel.com), [Docker](https://docker.com) untuk deployment, dan SQL Database.\r\n\r\nBukuBook adalah sample project untuk mendemonstrasikan pembuatan CRUD Laravel pada course Laravel Fundamentals yang saya ajar. Aplikasi ini dibuat dengan front-end [Blade](https://laravel.com/docs/master/blade) untuk konsep monolithic-apps. \r\n\r\nVisit [BukuBook Repository](https://github.com/adityapryg/bukubook) to get started.\r\n\r\n## 📋 Features\r\n\r\n- Authentication\r\n  - Register\r\n  - Login\r\n  - Support Multiple Roles (User & Admin)\r\n- CRUD User\r\n- CRUD Book's Category\r\n- CRUD Book\r\n\r\n## 📄 Requirements\r\n\r\n- PHP ^8.0\r\n- Composer\r\n- NodeJS\r\n- MySQL/PostgreSQL\r\n\r\n## 💻 Installation Step\r\n\r\nAll commands are run from the root of the project, from a terminal:\r\n\r\n\r\n| Command                                                 | Action                                                  |\r\n| :------------------------------------------------------ | :------------------------------------------------------ |\r\n| `git clone https://github.com/adityapryg/bukubook.git`  | Clone the repository                                    |\r\n| `cp  .env.example .env`                                 | Config APP_NAME & Database Connection in env            |\r\n| `composer install`                                      | Installing BukuBook php modules.                        |\r\n| `php artisan key:generate`                              | Generate APP_KEY                                        |\r\n| `npm install`                                           | Installing BukuBook js modules                          |\r\n| `npm run build`                                         | Building assets (using Vite)                            |\r\n| `php artisan migrate --seed`                            | Migrating the database scheme and seed dummy contents   |\r\n| `php artisan storage:link`                              | Linking public and storage, used for book's cover image |\r\n| `php artisan serve`                                     | Running laravel locally                                 |";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"-features","text":"📋 Features"},{"depth":2,"slug":"-requirements","text":"📄 Requirements"},{"depth":2,"slug":"-installation-step","text":"💻 Installation Step"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
