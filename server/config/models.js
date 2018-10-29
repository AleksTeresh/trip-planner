
module.exports.models = {
  attributes: {
    createdAt: { type: 'number', autoCreatedAt: true },
    updatedAt: { type: 'number', autoUpdatedAt: true },
    id: { type: 'string', columnName: '_id' }
  },

  dataEncryptionKeys: {
    default: 'l4DRwzo0YumQMnlzvVql3TZEjNOqQcZXphAue3Ed6uo='
  },

  cascadeOnDestroy: true
}
