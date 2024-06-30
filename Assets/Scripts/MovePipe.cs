using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MovePipe : MonoBehaviour {
    [SerializeField] float pipeIncrease = -0.1f;

    private Transform movement;

    private void Awake() {
        movement = GetComponent<Transform>();
    }

    private void Update() {
        movement.position += new Vector3(pipeIncrease, 0, 0);
    }
}
