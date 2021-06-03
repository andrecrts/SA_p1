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
      post {
        always {
          junit 'output/coverage/junit/junit.xml'
        }
      }
    }

    stage('Build') {
      steps { sh 'npm run-script build' }
    }
  }
}