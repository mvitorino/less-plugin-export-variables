const _ = require('lodash');

function extractValue(v) {
    if (!v.value) {
        return undefined;
    }
    if (_.isArray(v.value)) {
        return extractValue(v.value[0]);
    }
    return _.isString(v.value) ? v.value : extractValue(v.value);
}

function camelCase (string) {
    return string.replace( /-([a-z])/ig, function( all, letter ) {
        return letter.toUpperCase();
    });
}

module.exports = function(less) {

    function ExportVariables() {
        this._visitor = new less.visitors.Visitor(this);
    }

    ExportVariables.prototype = {
        isReplacing: false,
        isPreEvalVisitor: true,
        run: function (root) {
            return this._visitor.visit(root);
        },
        visitRule: function(node, visitArgs) {
            if (node.variable) {
                const v = extractValue(node);
                if (v) {
                    console.log(`export const ${camelCase(node.name)} = '${v}';`);
                }
            }
        },
    };
    return ExportVariables;
};