var root = 'http://emdata2.int.janelia.org/';

exports.baseUrl = function() {
  return root;
}

exports.repoInfoUrl = function(uuid) {
  return root + 'api/repo/' + uuid  + '/info';
};

exports.reposInfoUrl = function(uuid) {
  return root + 'api/repos/info';
};
