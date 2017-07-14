const exportVariables = require("./exportVariables");

module.exports = {
    install: function(less, pluginManager) {
        const ExportVariables = exportVariables(less);
        pluginManager.addVisitor(new ExportVariables());
    }
};
