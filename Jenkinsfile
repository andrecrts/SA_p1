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
      steps {
        script {
          sh 'npm run test'
        }
      }
    }

    stage('Build') {
      steps { sh 'npm run-script build' }
    }

    stage("Publish") {
        steps {
            sh 'firebase deploy --token $FIREBASE_TOKEN'
        }
    }
  }
}