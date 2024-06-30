using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GroundHandler : MonoBehaviour {    
    [SerializeField] float groundIncrease = 0.06f;
    private BoxCollider2D ground;

    private void Awake() {
        ground = GetComponent<BoxCollider2D>();
    }

    private void Update() {
        ground.size += new Vector2(groundIncrease, 0);
    }
}
