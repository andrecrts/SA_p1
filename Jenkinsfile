pipeline {
  agent {
    dockerfile true
  }
    environment {
        FIREBASE_TOKEN = credentials('FIREBASE_TOKEN')
    }
  stages {
    stage('Install') {
      steps { sh 'npm install' }
    }

    stage('Test') {
      parallel {
        stage('Unit tests') {
            steps { sh 'npm run-script test' }
        }
      }
    }

    stage('Build') {
      steps { sh 'npm run-script build' }
    }
}