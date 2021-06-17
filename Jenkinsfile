pipeline {
  agent {
      docker { image 'node:latest' }
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

    stage('Deploy') {
      
      withCredentials([file(credentialsId: 'USER_GOOGLE', variable: 'USER_GOOGLE')]) {
                    sh 'ansible-playbook main.yaml --user $USER_GOOGLE'
                }
    }



  }
}