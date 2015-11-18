var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var Hero = (function () {
    function Hero() {
    }
    return Hero;
})();
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.hero = {
            id: 1,
            name: 'Whindstorm'
        };
        this.heroes = HEROES;
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.NgFor],
            styles: ["\n\t\t.heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}\n\t\t.heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }\n\t\t.heroes li:hover {color: #369; background-color: #EEE; left: .2em;}\n\t\t.heroes .badge {\n\t\t\tfont-size: small;\n\t\t\tcolor: white;\n\t\t\tpadding: 0.1em 0.7em;\n\t\t\tbackground-color: #369;\n\t\t\tline-height: 1em;\n\t\t\tposition: relative;\n\t\t\tleft: -1px;\n\t\t\ttop: -1px;\n\t\t}\n\t\t.selected { background-color: #EEE; color: #369; }\n\t\t"],
            template: "\n\t\t<h1>{{ title }}</h1>\n\t\t<h2>My Heroes</h2>\n\t\t<ul class=\"heroes\">\n\t\t\t<li *ng-for=\"#hero of heroes\">\n\t\t\t\t<span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n\t\t\t</li>\n\t\t</ul>\n\t\t<h2>{{ hero.name }} details!</h2>\n\t\t<div><label>id: </label>{{ hero.id }}</div>\n\t\t<div>\n\t\t\t<label>name: </label>\n\t\t\t<div><input [(ng-model)]=\"hero.name\" placeholder=\"name\"></div>\n\t\t</div>\n\t\t"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent);
var HEROES = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];
//# sourceMappingURL=app.js.map