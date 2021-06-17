pipeline {
  agent {
      docker { image 'node:latest' }
  }
  environment {
    FIREBASE_TOKEN = credentials('FIREBASE_TOKEN')
    USER_GOOGLE = credentials('USER_GOOGLE')
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

    stage('Deploy') {
      steps {
        sh 'ansible-playbook main.yaml --user $USER_GOOGLE'
      }
    }

  }
}