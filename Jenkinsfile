pipeline {
  agent {
    dockerfile true
  }
  stages {
    stage('Install') {
      steps { sh 'npm install' }
    }

    stage('Test') {
      steps {
        script {
          sh 'npm run test'
        }
      }
    }

    stage('Build') {
      steps { sh 'npm run-script build' }
    }
  }
}