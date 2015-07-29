angular.module('starter.services', [])

.factory('Chanels', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var channels = [{
        id: 0,
        name: 'Первый канал',
        group: 'Общие',
        icon: 'perv.png',
        url: 'http://hls.novotelecom.ru/streaming/1kanal/tvrec/playlist.m3u8'
    }, {
        id: 1,
        name: 'Россия 1',
        group: 'Общие',
        icon: 'ros_1.png',
        url: 'http://hls.novotelecom.ru/streaming/rossija/tvrec/playlist.m3u8'
    }, {
        id: 2,
        name: 'Россия 2',
        group: 'Общие',
        icon: 'ros_2.png',
        url: 'http://hls.novotelecom.ru/streaming/sport/tvrec/playlist.m3u8'
    }, {
        id: 3,
        name: 'Русский Иллюзион',
        group: 'Общие',
        icon: 'illuzion_rus.png',
        url: 'http://hls.novotelecom.ru/streaming/russian_illusion/tvrec/playlist.m3u8'
    }, {
        id: 4,
        name: 'НТВ',
        group: 'Общие',
        icon: 'ntv.png',
        url: 'http://hls.novotelecom.ru/streaming/ntv/tvrec/playlist.m3u8'
    }, {
        id: 5,
        name: 'РенТВ',
        group: 'Общие',
        icon: 'ren.png',
        url: 'http://hls.novotelecom.ru/streaming/rentv/tvrec/playlist.m3u8'
    }, {
        id: 6,
        name: 'ТВЦ',
        group: 'Общие',
        icon: 'tvc.png',
        url: 'http://hls.novotelecom.ru/streaming/tvc/tvrec/playlist.m3u8'
    }, {
        id: 7,
        name: 'Россия 24',
        group: 'Общие',
        icon: 'rossia24.png',
        url: 'http://hls.novotelecom.ru/streaming/vesti/tvrec/playlist.m3u8'
    }, {
        id: 8,
        name: 'Звезда',
        group: 'Общие',
        icon: 'zvezda.png',
        url: 'http://hls.novotelecom.ru/streaming/jv/tvrec/playlist.m3u8'
    }, {
        id: 9,
        name: 'Перец',
        group: 'Общие',
        icon: 'perec.png',
        url: 'http://hls.novotelecom.ru/streaming/perec/tvrec/playlist.m3u8'
    }, {
        id: 10,
        name: 'Культура',
        group: 'Общие',
        icon: 'kultura.png',
        url: 'http://hls.novotelecom.ru/streaming/kultura/tvrec/playlist.m3u8'
    }, {
        id: 11,
        name: 'Русский Роман',
        group: 'Общие',
        icon: 'rusrom.png',
        url: 'http://hls.novotelecom.ru/streaming/russian_roman/tvrec/playlist.m3u8'
    }, {
        id: 11,
        name: 'Спорт 1',
        group: 'Общие',
        icon: 'sport1r.png',
        url: 'http://hls.novotelecom.ru/streaming/sport1/tvrec/playlist.m3u8'
    }];

    return {
        all: function () {
            return channels;
        }
    }
});
//.factory('TvGuide', function ($scope, $timeout, $cordovaFileTransfer) {
//    document.addEventListener('deviceready', function () {

//        var url = "http://www.teleguide.info/download/new3/xmltv.xml.gz";
//        var targetPath = cordova.file.documentsDirectory + "xmltv.xml.gz";
//        var trustHosts = true
//        var options = {};

//        $cordovaFileTransfer.download(url, targetPath, options, trustHosts)
//          .then(function (result) {
//              $scope = result;
//              // Success!
//          }, function (err) {
//              // Error
//          }, function (progress) {
//              $timeout(function () {
//                  $scope.downloadProgress = (progress.loaded / progress.total) * 100;
//              })
//          });
//    }, false);
//});
