'use strict';

define('personal-portfolio/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('pods/application/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/application/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/components/about-me/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/about-me/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/components/experience-element/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/experience-element/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/components/grid-card/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/grid-card/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/components/header-block/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/header-block/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/components/my-education/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/my-education/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/components/my-experience/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/my-experience/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/components/my-organizations/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/my-organizations/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/components/my-projects/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/my-projects/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/components/my-recommendations/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/my-recommendations/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/components/my-skills/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/my-skills/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/components/portfolio-header/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/portfolio-header/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/components/portfolio-menu/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/portfolio-menu/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/components/wip-section/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/wip-section/component.js should pass ESLint\n\n');
  });

  QUnit.test('pods/index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/index/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/move-to/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/move-to/service.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('transitions.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transitions.js should pass ESLint\n\n');
  });
});
define('personal-portfolio/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('personal-portfolio/tests/helpers/ember-basic-dropdown', ['exports', 'ember-basic-dropdown/test-support/helpers', 'ember-native-dom-helpers'], function (exports, _helpers, _emberNativeDomHelpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.nativeClick = exports.fireKeydown = exports.tapTrigger = exports.clickTrigger = exports.nativeTap = undefined;
  Object.defineProperty(exports, 'nativeTap', {
    enumerable: true,
    get: function () {
      return _helpers.nativeTap;
    }
  });
  Object.defineProperty(exports, 'clickTrigger', {
    enumerable: true,
    get: function () {
      return _helpers.clickTrigger;
    }
  });
  Object.defineProperty(exports, 'tapTrigger', {
    enumerable: true,
    get: function () {
      return _helpers.tapTrigger;
    }
  });
  Object.defineProperty(exports, 'fireKeydown', {
    enumerable: true,
    get: function () {
      return _helpers.fireKeydown;
    }
  });
  exports.default = _helpers.default;
  var nativeClick = exports.nativeClick = _emberNativeDomHelpers.click;
});
define('personal-portfolio/tests/helpers/ember-power-select', ['exports', 'ember-power-select/test-support/helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.selectChoose = exports.touchTrigger = exports.nativeTouch = exports.clickTrigger = exports.typeInSearch = exports.triggerKeydown = exports.nativeMouseUp = exports.nativeMouseDown = exports.findContains = undefined;
  exports.default = deprecatedRegisterHelpers;


  function deprecateHelper(fn, name) {
    return function () {
      (true && !(false) && Ember.deprecate('DEPRECATED `import { ' + name + ' } from \'../../tests/helpers/ember-power-select\';` is deprecated. Please, replace it with `import { ' + name + ' } from \'ember-power-select/test-support/helpers\';`', false, { until: '1.11.0', id: 'ember-power-select-test-support-' + name }));

      return fn.apply(undefined, arguments);
    };
  }

  var findContains = deprecateHelper(_helpers.findContains, 'findContains');
  var nativeMouseDown = deprecateHelper(_helpers.nativeMouseDown, 'nativeMouseDown');
  var nativeMouseUp = deprecateHelper(_helpers.nativeMouseUp, 'nativeMouseUp');
  var triggerKeydown = deprecateHelper(_helpers.triggerKeydown, 'triggerKeydown');
  var typeInSearch = deprecateHelper(_helpers.typeInSearch, 'typeInSearch');
  var clickTrigger = deprecateHelper(_helpers.clickTrigger, 'clickTrigger');
  var nativeTouch = deprecateHelper(_helpers.nativeTouch, 'nativeTouch');
  var touchTrigger = deprecateHelper(_helpers.touchTrigger, 'touchTrigger');
  var selectChoose = deprecateHelper(_helpers.selectChoose, 'selectChoose');

  function deprecatedRegisterHelpers() {
    (true && !(false) && Ember.deprecate("DEPRECATED `import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import registerPowerSelectHelpers from 'ember-power-select/test-support/helpers';`", false, { until: '1.11.0', id: 'ember-power-select-test-support-register-helpers' }));

    return (0, _helpers.default)();
  }

  exports.findContains = findContains;
  exports.nativeMouseDown = nativeMouseDown;
  exports.nativeMouseUp = nativeMouseUp;
  exports.triggerKeydown = triggerKeydown;
  exports.typeInSearch = typeInSearch;
  exports.clickTrigger = clickTrigger;
  exports.nativeTouch = nativeTouch;
  exports.touchTrigger = touchTrigger;
  exports.selectChoose = selectChoose;
});
define('personal-portfolio/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'personal-portfolio/tests/helpers/start-app', 'personal-portfolio/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('personal-portfolio/tests/helpers/start-app', ['exports', 'personal-portfolio/app', 'personal-portfolio/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
// import { moduleForComponent, test } from 'ember-qunit';
// import hbs from 'htmlbars-inline-precompile';

// moduleForComponent('about-me', 'Integration | Component | about me', {
//   integration: true
// });

// test('it renders', function(assert) {
//   // Set any properties with this.set('myProperty', 'value');
//   // Handle any actions with this.on('myAction', function(val) { ... });

//   this.render(hbs`{{about-me}}`);

//   assert.equal(this.$().text().trim(), 'About Me');
// });
define("personal-portfolio/tests/integration/pods/components/about-me/component-test", [], function () {
  "use strict";
});
// import { moduleForComponent, test } from 'ember-qunit';
// import hbs from 'htmlbars-inline-precompile';

// moduleForComponent('experience-element', 'Integration | Component | experience element', {
//   integration: true
// });

// test('it renders', function(assert) {
//   // Set any properties with this.set('myProperty', 'value');
//   // Handle any actions with this.on('myAction', function(val) { ... });

//   this.render(hbs`{{experience-element}}`);

//   assert.equal(this.$().text().trim(), '');

//   // Template block usage:
//   this.render(hbs`
//     {{#experience-element}}
//       template block text
//     {{/experience-element}}
//   `);

//   assert.equal(this.$().text().trim(), 'template block text');
// });
define("personal-portfolio/tests/integration/pods/components/experience-element/component-test", [], function () {
  "use strict";
});
// import { moduleForComponent, test } from 'ember-qunit';
// import hbs from 'htmlbars-inline-precompile';

// moduleForComponent('grid-card', 'Integration | Component | grid card', {
//   integration: true
// });

// test('it renders', function(assert) {
//   // Set any properties with this.set('myProperty', 'value');
//   // Handle any actions with this.on('myAction', function(val) { ... });

//   this.render(hbs`{{grid-card}}`);

//   assert.equal(this.$().text().trim(), '');

// });
define("personal-portfolio/tests/integration/pods/components/grid-card/component-test", [], function () {
  "use strict";
});
// import { moduleForComponent, test } from 'ember-qunit';
// import hbs from 'htmlbars-inline-precompile';

// moduleForComponent('my-education', 'Integration | Component | my education', {
//   integration: true
// });

// test('it renders', function(assert) {
//   // Set any properties with this.set('myProperty', 'value');
//   // Handle any actions with this.on('myAction', function(val) { ... });

//   this.render(hbs`{{my-education}}`);

//   assert.equal(this.$().text().trim(), '');

//   // Template block usage:
//   this.render(hbs`
//     {{#my-education}}
//       template block text
//     {{/my-education}}
//   `);

//   assert.equal(this.$().text().trim(), 'template block text');
// });
define("personal-portfolio/tests/integration/pods/components/my-education/component-test", [], function () {
  "use strict";
});
// import { moduleForComponent, test } from 'ember-qunit';
// import hbs from 'htmlbars-inline-precompile';

// moduleForComponent('my-experience', 'Integration | Component | my experience', {
//   integration: true
// });

// test('it renders', function(assert) {
//   // Set any properties with this.set('myProperty', 'value');
//   // Handle any actions with this.on('myAction', function(val) { ... });

//   this.render(hbs`{{my-experience}}`);

//   assert.equal(this.$().text().trim(), '');

//   // Template block usage:
//   this.render(hbs`
//     {{#my-experience}}
//       template block text
//     {{/my-experience}}
//   `);

//   assert.equal(this.$().text().trim(), 'template block text');
// });
define("personal-portfolio/tests/integration/pods/components/my-experience/component-test", [], function () {
  "use strict";
});
define('personal-portfolio/tests/integration/pods/components/my-organizations/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('my-organizations', 'Integration | Component | my organizations', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "FKTG/jQn",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"my-organizations\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "HvBb0gDu",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"my-organizations\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
// import { moduleForComponent, test } from 'ember-qunit';
// import hbs from 'htmlbars-inline-precompile';

// moduleForComponent('my-projects', 'Integration | Component | my projects', {
//   integration: true
// });

// test('it renders', function(assert) {
//   // Set any properties with this.set('myProperty', 'value');
//   // Handle any actions with this.on('myAction', function(val) { ... });

//   this.render(hbs`{{my-projects}}`);

//   assert.equal(this.$().text().trim(), '');

//   // Template block usage:
//   this.render(hbs`
//     {{#my-projects}}
//       template block text
//     {{/my-projects}}
//   `);

//   assert.equal(this.$().text().trim(), 'template block text');
// });
define("personal-portfolio/tests/integration/pods/components/my-projects/component-test", [], function () {
  "use strict";
});
// import { moduleForComponent, test } from 'ember-qunit';
// import hbs from 'htmlbars-inline-precompile';

// moduleForComponent('my-recommendations', 'Integration | Component | my recommendations', {
//   integration: true
// });

// test('it renders', function(assert) {
//   // Set any properties with this.set('myProperty', 'value');
//   // Handle any actions with this.on('myAction', function(val) { ... });

//   this.render(hbs`{{my-recommendations}}`);

//   assert.equal(this.$().text().trim(), '');

//   // Template block usage:
//   this.render(hbs`
//     {{#my-recommendations}}
//       template block text
//     {{/my-recommendations}}
//   `);

//   assert.equal(this.$().text().trim(), 'template block text');
// });
define("personal-portfolio/tests/integration/pods/components/my-recommendations/component-test", [], function () {
  "use strict";
});
define('personal-portfolio/tests/integration/pods/components/my-skills/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('my-skills', 'Integration | Component | my skills', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "2g60K2bh",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"my-skills\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "IfOQwvwK",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"my-skills\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
// import { moduleForComponent, test } from 'ember-qunit';
// import hbs from 'htmlbars-inline-precompile';

// moduleForComponent('portfolio-header', 'Integration | Component | portfolio header', {
//   integration: true
// });

// test('it renders', function(assert) {
//   // Set any properties with this.set('myProperty', 'value');
//   // Handle any actions with this.on('myAction', function(val) { ... });

//   this.render(hbs`{{portfolio-header}}`);

//   assert.equal(this.$().text().trim(), '');

//   // Template block usage:
//   this.render(hbs`
//     {{#portfolio-header}}
//       template block text
//     {{/portfolio-header}}
//   `);

//   assert.equal(this.$().text().trim(), 'template block text');
// });
define("personal-portfolio/tests/integration/pods/components/portfolio-header/component-test", [], function () {
  "use strict";
});
// import { moduleForComponent, test } from 'ember-qunit';
// import hbs from 'htmlbars-inline-precompile';

// moduleForComponent('portfolio-menu', 'Integration | Component | portfolio menu', {
//   integration: true
// });

// test('it renders', function(assert) {
//   // Set any properties with this.set('myProperty', 'value');
//   // Handle any actions with this.on('myAction', function(val) { ... });

//   this.render(hbs`{{portfolio-menu}}`);

//   assert.equal(this.$().text().trim(), '');

//   // Template block usage:
//   this.render(hbs`
//     {{#portfolio-menu}}
//       template block text
//     {{/portfolio-menu}}
//   `);

//   assert.equal(this.$().text().trim(), 'template block text');
// });
define("personal-portfolio/tests/integration/pods/components/portfolio-menu/component-test", [], function () {
  "use strict";
});
define('personal-portfolio/tests/test-helper', ['personal-portfolio/app', 'personal-portfolio/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('personal-portfolio/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/pods/components/about-me/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/about-me/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/pods/components/experience-element/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/experience-element/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/pods/components/grid-card/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/grid-card/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/pods/components/my-education/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/my-education/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/pods/components/my-experience/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/my-experience/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/pods/components/my-organizations/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/my-organizations/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/pods/components/my-projects/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/my-projects/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/pods/components/my-recommendations/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/my-recommendations/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/pods/components/my-skills/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/my-skills/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/pods/components/portfolio-header/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/portfolio-header/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/pods/components/portfolio-menu/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/portfolio-menu/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/application/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/application/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/index/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/index/route-test.js should pass ESLint\n\n');
  });
});
// import { moduleFor, test } from 'ember-qunit';

// moduleFor('route:application', 'Unit | Route | application', {
//   // Specify the other units that are required for this test.
//   // needs: ['controller:foo']
// });

// test('it exists', function(assert) {
//   let route = this.subject();
//   return assert.ok(route);
// });
define("personal-portfolio/tests/unit/pods/application/route-test", [], function () {
  "use strict";
});
// import { moduleFor, test } from 'ember-qunit';

// moduleFor('route:index', 'Unit | Route | index', {
//   // Specify the other units that are required for this test.
//   // needs: ['controller:foo']
// });

// test('it exists', function(assert) {
//   let route = this.subject();
//   assert.ok(route);
// });
define("personal-portfolio/tests/unit/pods/index/route-test", [], function () {
  "use strict";
});
require('personal-portfolio/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
