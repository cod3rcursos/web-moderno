const { series } = require('gulp')
const gulp = require('gulp')
// Utilizado para concatenar arquivos
const concat = require('gulp-concat')
// Utilizado para mimifacar os aqruivos
const uglify = require('gulp-uglify')
// Utilizado para modificar o código de uma maneira automática permitindo que ele seja "lido" pela maioria dos browsers
const babel = require('gulp-babel')

function transformacaoJS(cb) {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            // Tirando os comentários através do babel
            comments: false,
            // Preset que pega o JavaScript mais moderno e converte para a mais compatível com o browser
            presets: ["env"]
        }))

        // Mimificando os arquivos
        .pipe(uglify())
        .on('error', err => console.log(err))

        // Concatenando códigos
        .pipe(concat('codigo.min.js'))
        // Passando tudo para uma pasta chamada build
        .pipe(gulp.dest('build'))
}

function fim(cb) {
    console.log('Fim!!!')
    return cb()
}

exports.default = series(transformacaoJS, fim)