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


module.exports = function(less) {

	// var ParamStringReplacementNode = require('./param-string-replacement-node')(less);

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
                console.log(node.name, extractValue(node));
            }
            // console.log(JSON.stringify(node));
            // console.log(node.name); //, variableNode.eval()); // JSON.stringify(ruleNode));
            // throw new Error('bleh==');
        },
        visitVariable: function(variableNode, visitArgs) {
            // console.log(JSON.stringify(variableNode));
            // console.log(variableNode.name); //, variableNode.eval()); // JSON.stringify(ruleNode));
            // throw new Error('bleh==');
        },
        // visitVariableOut: function(variableNode, visitArgs) {
        //     console.log(JSON.stringify(variableNode));
        //     // console.log(2, variableNode.name, variableNode.eval()); // JSON.stringify(ruleNode));
        // },
        // visitRule: function (ruleNode, visitArgs) {
        //     // throw new Error('blah');
        //     this._inRule = true;
        //     return ruleNode;
        // },
        // visitRuleOut: function (ruleNode, visitArgs) {
        //     this._inRule = false;
        // },
        // visitUrl: function (URLNode, visitArgs) {
        //     return URLNode;
        //     // if (!this._inRule) {
        //     //     return URLNode;
        //     // }
        //     // if (URLNode.value && URLNode.value.value && URLNode.value.value.indexOf('#') === 0) {
        //     //   // Might be part of a VML url-node value like:
        //     //   // ``behavior:url(#default#VML);``
        //     //   return URLNode;
        //     // }
        //     // return new less.tree.Call("data-uri", [new ParamStringReplacementNode(URLNode.value)], URLNode.index || 0, URLNode.currentFileInfo);
        // }
    };
    return ExportVariables;
};