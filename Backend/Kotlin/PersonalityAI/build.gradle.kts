plugins {
    kotlin("jvm") version "2.0.10"
}

group = "ASD.Technischleerdoel"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    testImplementation(kotlin("test"))
    implementation ("org.jetbrains.kotlinx:kotlin-deeplearning-api:0.5.2")
}

tasks.test {
    useJUnitPlatform()
}