using System;
using System.Threading;
using System.Numerics;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PipeMaker : MonoBehaviour {
    [SerializeField] private GameObject pipe;
    [SerializeField] private float maxTime = .8f;
    [SerializeField] private float upperRange = 2.5f;
    [SerializeField] private float lowerRange = -1.5f;

    private float currentTime;

    void Start() {
        SpawnPipe();
    }

    void Update() {
        if (currentTime > maxTime) {
            SpawnPipe();
            currentTime = 0;
        }

        currentTime += Time.deltaTime;
    }

    private void SpawnPipe() {
        UnityEngine.Vector3 spawn = transform.position + new UnityEngine.Vector3(0, UnityEngine.Random.Range(lowerRange, upperRange), 0);
        GameObject currentPipe = Instantiate(pipe, spawn, UnityEngine.Quaternion.identity);
        Destroy(currentPipe, 20f);
    }
}
